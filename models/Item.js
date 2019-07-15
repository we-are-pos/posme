module.exports = { Schema, model } => {
    const Item = new Schema({
        name: String,


    })

    return model('Item', Item)
}