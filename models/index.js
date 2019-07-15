const { Schema, model } = require('mongoose')

module.exports = {
    User: require('./User.js')(Schema, model)
    Company: require('./Company.js')(Schema, model)
    Category: require('./Category.js')(Schema, model)
    Item: require('./Item.js')(Schema, model)
    Order: require('./Order.js')(Schema, model)
}