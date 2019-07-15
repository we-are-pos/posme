module.exports = { Schema, model } => {
    const Category = new Schema({
        name: String,
        company: {
            type: Schema.Types.ObjectId,
            ref: 'Company'
        }
        

    })

    return model('Category', Category)
}