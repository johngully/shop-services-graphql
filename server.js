const express = require('express');
const cors = require('cors');
const combinedHandler = require('./handlers/combined');
const productsHandler = require('./handlers/products');
const productHandler = require('./handlers/product');

const app = express();

app.use(cors());
app.use('/graphql', combinedHandler);
app.use('/products', productsHandler);
app.use('/product', productHandler);

app.listen(3030, () => console.log('Express Graphql running on http://localhost:3030/graphql'));