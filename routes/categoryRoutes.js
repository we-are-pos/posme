const { Category, Company } = require('../models')

module.exports = app => {
    app.get('/category', (req, res) => {
        Category.find({})
            .then(category => res.json(category))
            .catch(e => console.log(e))
    })
    app.get('/category/:_id', (req, res) => {
        Category.findById(req.params._id)
            .populate('company')
            .populate('items')
            .then(category => res.json(category))
            .catch(e => console.log(e))
    })
    app.post('/category', (req, res) => {
        Category.create(req.body)
            .then(({ _id, company }) => {
                Company.updateOne({ _id: company }, { $push: { categories: _id } })
                    .then(res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    })
    app.put('/category/:_id', (req, res) => {
        Category.findByIdAndUpdate({ _id: req.params._id }, { $set: req.body })
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.delete('/category/:_id', (req, res) => {
        Category.findByIdAndDelete(req.params._id)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
}