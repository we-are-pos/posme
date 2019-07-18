module.exports = (Schema, model) => {
  const Category = new Schema({
    name: String,
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    items: [{
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }]
  })

  return model('Category', Category)
}
