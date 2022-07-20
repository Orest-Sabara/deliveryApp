const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/database')

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db = 'mongodb+srv://testMongo:1q2w3e4r@cluster0.4r4yb8w.mongodb.net/testMongo?retryWrites=true&w=majority'

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    console.log(`method: ${req.method}`);
    next();
})

app.use(express.static('./assets/css'));

app.get('/index', (req, res) => {
    const title = 'Product';
    Product
        .find()
        .then((mcd) => res.render(createPath('mcd'), { mcd, title }))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' });
        });
});

app.get('/index.html', (req, res) => {
    res.sendFile(createPath('index'));
});

app.get('/about', (req, res) => {
    res.sendFile(createPath('about'));
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
});