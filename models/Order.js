module.exports = { Schema, model } => {
    const Order = new Schema({
        name: String,


    })

    return model('Order', Order)
}