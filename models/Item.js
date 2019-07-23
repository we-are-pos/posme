module.exports = (Schema, model) => {
  const Item = new Schema({
    name: String,
    desc: String,
    price: Number,
    inventory: Number,
    tags: [{
      type: String
    }],
    img: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },


  })
  return model('Item', Item)
}
