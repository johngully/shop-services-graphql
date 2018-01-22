const productTypes = `
type Product {
  id: String!,
  details: Details!,
  pricing: Pricing!,
  attributes: Attributes,
  images: [String]
}
type Details {
  name: String,
  description: String
}
type Pricing {
  amount: Int
}
type Attributes {
  color: String,
  fit: String,
  material: String,
  measurements: String,
  shape: String
}`;

module.exports = productTypes;