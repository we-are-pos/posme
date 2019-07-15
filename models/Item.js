module.exports = (Schema, model) => {
  const Item = new Schema({
    name: String,
    desc: String,
    price: Number,
    inventory: Number,
    tags: Array,
    img: {
      data: Buffer,
      contentType: String
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }

  })
  return model('Item', Item)
}
