module.exports = { Schema, model } => {
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

    return model('User', User)
}