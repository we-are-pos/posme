module.exports = { Schema, model } => {
    const Order = new Schema({
        orderNumber: Number,
        items: Array,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    })

    return model('Order', Order)
}