module.exports = { Schema, model } => {
    const Order = new Schema({
        name: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    })

    return model('Order', Order)
}