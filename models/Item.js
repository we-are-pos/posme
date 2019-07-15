module.exports = { Schema, model } => {
    const Item = new Schema({
        name: String,
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }

    })

    return model('Item', Item)
}