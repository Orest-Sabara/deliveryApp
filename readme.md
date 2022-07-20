
 --- Delivery app ---



--------ukr------------

npm run dev - запускає server.js

-----------------------

updated:
1)кошик покупок, додано іконку, щоб можна було переглянути 
скільки товару в кошику та офрмити зразу замволення.
додано вибір в розмірах товару.
та поставлені -1+ щоб можна було обрати зразу необхідну кількість

2) підключено до бази даних MongoDB, за допомогою Express, Mongoose та Node.js

-----------------------

магазин складається з 3 сторінок:

А) Головна - (index.html) - де знаходиться [
header - {назва та дві силки по яким можна перейти:
1)Магазин - до асортименту товару
2)Акції - до нової сторінки з формою }

main - {тут знаходиться асортимент товару, вибираючи 1 з 4 магазинів 
показує товар обраного магазину. Товар можна добавляти в корзину без обмежень
(тобто один товар багато разів), але не можна обирати товар з різних магазинів одночасно}. Кнопки: 
Оформити заказ - при натискані показує, який товар ви обрали
Очистити корзину - коли обрали, щось не то можна очистити товар

footer - {посилання на соціальні мережі}
]

B) Сторінка з формою для відправки - (about.html) [
header - {кнопка, яка вертає на попередню сторінку та таймер зворотнього відліку,
який вказує скільки часу залишилось}

main - {форма, яка вкаже на помилки при заповнені, якщо заповнити не коректно та Google.map, 
яка покаже розташування вибраного нами місця}

footer - {посилання на соціальні мережі}
]

С) Error - коли не правильна адреса


папка views: asset та smartbasket

папка assets:
/css (style.css та form-style.css тут знаходяться стилі до index.html та 
about.html відповідно)

/images (фотографії посортовані по папкам магазинів)

/js (script.js файл зі скриптами до index.html та about.html)

папка smartbasket - (стилі та робота корзини):
/css - стилі
/img - іконка svg
/js - скрпити js
/php - скрпити php


папка models:
скрипти до бази даних MongoDB


--------eng----------

npm run dev - Runs server.js

-----------------------

updated:
1)shopping cart, added an icon to view
how many products are in the cart and place the order immediately.
added product size selection.
and put -1+ so that you can choose the required amount right away

2) connected to the MongoDB database, using Express, Mongoose and Node.js

-----------------------

the store consists of 3 pages:

A) Home - (index.html) - where is [
header - {name and two strings that can be followed:
1) Store - to product range
2) Promotions - to a new page with a form }

main - {here is the assortment of goods, choosing 1 of 4 stores
shows the product of the selected store. The product can be added to the basket without restrictions
(i.e. one product many times), but you cannot choose a product from different stores at the same time}. Buttons:
Place an order - when clicked, it shows which product you have chosen
Clear the basket - when you have chosen something wrong, you can clear the product

footer - {links to social networks}
]

B) Page with the form for sending - (about.html) [
header - {button that returns to the previous page and a countdown timer,
which indicates how much time is left}

main - {form that will indicate errors when filling in, if filled in incorrectly and Google.map,
which will show the location of the place we selected}

footer - {links to social networks}
]

C) Error - when the address is not correct


folder views: asset and smartbasket

assets folder:
/css (style.css and form-style.css here are the styles to index.html and
about.html respectively)

/images (photos sorted by store folders)

/js (script.js file with scripts to index.html and about.html)

folder smartbasket - (styles and operation of the basket):
/css - styles
/img - icon svg
/js - compile js
/php - compile php


models folder:
scripts to the MongoDB database