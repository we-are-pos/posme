module.exports = { Schema, model } => {
    const Company = new Schema({
        name: String,


    })

    return model('Company', Company)
}