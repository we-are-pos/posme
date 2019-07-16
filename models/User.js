module.exports = (Schema, model) => {
  const User = new Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    isAdmin: Boolean,
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    }
  })
  User.plugin(require('passport-local-mongoose'))
  return model('User', User)
}
