const { Company } = require('../models')

module.exports = app => {
    app.get('/company', (req, res) => {
        Company.find({_id: req.body._id})
            .populate('users')
            .populate('categories')
            .then(company => res.json(company))
            .catch(e => console.log(e))
    })
    app.get('/company/:_id', (req, res) => {
        Company.findById(req.params._id)
            .populate('users')
            .populate('categories')
            .then(company => res.json(company))
            .catch(e => console.log(e))
    })
    app.post('/company', (req, res) => {
        Company.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.put('/company/:_id', (req, res) => {
        Company.findByIdAndUpdate({_id: req.params._id}, {$set: req.body})
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.delete('/company/:_id', (req, res) => {
        Company.findByIdAndDelete(req.params._id)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
}
