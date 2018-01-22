const lowdb = require('lowdb');
const Memory = require('lowdb/adapters/Memory')
const data = require('./data.json');

class productsRepository {

  constructor () {
    const adapter = new Memory('data.json')
    this.db = lowdb(adapter);
    this.db.setState(data);
  }

  getProducts() {
    return this.db.get('products').sortBy('details.name').value();
  }

  getProduct(id) {
    return this.db.get('products').find({ id }).value();
  }

}

module.exports = new productsRepository();
