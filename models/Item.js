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
    tab: {
      type: Schema.Types.ObjectId,
      ref: 'Tab'
    },


  })
  return model('Item', Item)
}
