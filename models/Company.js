module.exports = (Schema, model) => {
  const Company = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    users: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    tabs: [{
        type: Schema.Types.ObjectId,
        ref: 'Tab'
    }]
  })

  return model('Company', Company)
}
