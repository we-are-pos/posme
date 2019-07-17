const { Company } = require('../models')

module.exports = app => {
    app.get('/company', (req, res) => {
        Company.find({}, (e, company) => {
            if (e) throw e
            res.json(company)
        })
    })    
    app.get('/company/:_id', (req, res) => {
        Company.findById(req.params._id, (e, company) => {
            if (e) throw e
            res.json(company)
        })
    })
    app.post('/company', (req, res) => {
        Company.create(req.body, e => {
            if (e) throw e
            res.sendStatus(200)
        })
    })
    app.put('/company/:_id', (req, res) => {
        Company.findAndUpdate()
    })
}
