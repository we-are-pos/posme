module.exports = { Schema, model } => {
    const Company = new Schema({
        name: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    })

    return model('Company', Company)
}