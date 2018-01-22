const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const productsRepository = require('../data/productsRepository');
const productTypes = require('../data/productTypes');

const combinedQuery = `
  type Query {
    products: [Product],
    product(id: String!): Product
  }
`;

const handler = express_graphql({
  schema: buildSchema(combinedQuery + productTypes),
  rootValue: {
    product: (args) => productsRepository.getProduct(args.id),
    products: (args) => productsRepository.getProducts()
  },
  graphiql: true // TODO: This setting is for development purposes only.
});

module.exports = handler;