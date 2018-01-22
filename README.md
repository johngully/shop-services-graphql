# shop-services-graphql
Service to support the shop examples implemented using graphql

# Steps to create

### Setup dependencies
```bash
npm install --save graphql express express-graphql lowdb
``` 

### Create the API endpoint in server.js


See: https://codingthesmartway.com/creating-a-graphql-server-with-node-js-and-express/ 

### Query the GraphQL API
Visit the http://localhost:3030/graphql endpoint and use the GraphIql interface to query the API.

*Be sure to expand the query variables panel at the bottom of the screen*

#### Query
```
query getProducts($productId: String!) {
  product(id: $productId) {
    ...ProductSummary
  },
  products {
    ...ProductSummary
  }
}

fragment ProductSummary on Product {
  id,
  details {
    name
    description
  },
  pricing {
    amount
  },
  attributes {
    color
    fit
    material
    measurements
    shape
  },
  images
}
```

#### Query Variables
```
{
  "productId": "8"
}
```

### Postman Request
#### POST

#### HEADERS
Accept: application/json
Content-Type: application/json

#### BODY (raw)
```
{"query":"query getProducts($productId: String!) {\n  product(id: $productId) {\n    ...ProductSummary\n  },\n  products {\n    ...ProductSummary\n  }\n}\n\nfragment ProductSummary on Product {\n  id,\n  details {\n    name\n    description\n  },\n  pricing {\n    amount\n  },\n  attributes {\n    color\n    fit\n    material\n    measurements\n    shape\n  },\n  images\n}","variables":{"productId":"1"},"operationName":"getProducts"}
```