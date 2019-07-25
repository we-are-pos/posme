const { Schema, model } = require('mongoose')
const User = require('./User.js')
const Company = require('./Company.js')
const Tab = require('./Tab.js')
const Item = require('./Item.js')
const Order = require('./Order.js')

module.exports = {
  User: User(Schema, model),
  Company: Company(Schema, model),
  Tab: Tab(Schema, model),
  Item: Item(Schema, model),
  Order: Order(Schema, model)
}
