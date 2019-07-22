const { Tab, Company } = require('../models')

module.exports = app => {
    app.get('/tab', (req, res) => {
        Tab.find({})
            .then(tab => res.json(tab))
            .catch(e => console.log(e))
    })
    app.get('/tab/:_id', (req, res) => {
        Tab.findById(req.params._id)
            .populate('company')
            .populate('items')
            .then(tab => res.json(tab))
            .catch(e => console.log(e))
    })
    app.post('/tab', (req, res) => {
        Tab.create(req.body)
            .then(({ _id, company }) => {
                Company.updateOne({ _id: company }, { $push: { categories: _id } })
                    .then(res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    })
    app.put('/tab/:_id', (req, res) => {
        Tab.findByIdAndUpdate({ _id: req.params._id }, { $set: req.body })
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.delete('/tab/:_id', (req, res) => {
        Tab.findByIdAndDelete(req.params._id)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
}