module.exports = { Schema, model } => {
    const Category = new Schema({
        name: String,
        

    })

    return model('Category', Category)
}