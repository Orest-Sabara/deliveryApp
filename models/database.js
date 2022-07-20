const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mcdSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model('Product', mcdSchema);

module.exports = Product;