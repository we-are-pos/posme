module.exports = (Schema, model) => {
  const Tab = new Schema({
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

  return model('Tab', Tab)
}
