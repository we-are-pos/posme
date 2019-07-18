module.exports = (Schema, model) => {
  const Order = new Schema({
    orderNumber: Number,
    items: [{
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  })
  return model('Order', Order)
}
