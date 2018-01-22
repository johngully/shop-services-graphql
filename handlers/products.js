const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const productsRepository = require('../data/productsRepository');
const productTypes = require('../data/productTypes');

const productsQuery = `
  type Query {
    products: [Product]
  }
`;

const handler = express_graphql({
  schema: buildSchema(productsQuery + productTypes),
  rootValue: {
    products: (args) => productsRepository.getProducts()
  }
});

module.exports = handler;