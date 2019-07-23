module.exports = (Schema, model) => {
  const Item = new Schema({
    name: String,
    desc: String,
    price: Number,
    inventory: Number,
    tags: [{
      type: String
    }],
    img: {
      data: Buffer,
      contentType: String
    },
    tab: {
      type: Schema.Types.ObjectId,
      ref: 'Tab'
    },


  })
  return model('Item', Item)
}
