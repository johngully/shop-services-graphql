const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const productsRepository = require('../data/productsRepository');
const productTypes = require('../data/productTypes');

const productQuery = `
  type Query {
    product(id: String!): Product
  }
`;

const handler = express_graphql({
  schema: buildSchema(productQuery + productTypes),
  rootValue: {
    product: (args) => productsRepository.getProduct(args.id),
  }
});

module.exports = handler;