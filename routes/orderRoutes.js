const { Order, User } = require('../models')

module.exports = app => {
    app.get('/order', (req, res) => {
        Order.find({})
            .then(order => res.json(order))
            .catch(e => console.log(e))
    })
    app.get('/order/:_id', (req, res) => {
        Order.findById(req.params._id)
            .populate('users')
            .populate('items')
            .then(order => res.json(order))
            .catch(e => console.log(e))
    })
    app.post('/order', (req, res) => {
        Order.create(req.body)
            .then(({ _id, user }) => {
                User.updateOne({ _id: user }, { $push: { orders: _id } })
                    .then(res.sendStatus(200))
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))
    })
    app.put('/order/:_id', (req, res) => {
        Order.findByIdAndUpdate({ _id: req.params._id }, { $set: req.body })
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.delete('/order/:_id', (req, res) => {
        Order.findByIdAndDelete(req.params._id)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
}