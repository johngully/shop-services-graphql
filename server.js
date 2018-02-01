const express = require('express');
const cors = require('cors');
const productsHandler = require('./handlers/products');

const app = express();

app.use(cors());
app.use('/products', productsHandler);

app.listen(3030, () => console.log('Express Graphql running on http://localhost:3030/graphql'));