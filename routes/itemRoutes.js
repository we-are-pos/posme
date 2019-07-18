const { Item } = require('../models')

module.exports = app => {
    app.get('/item', (req, res) => {
        Item.find({})
            .then(item => res.json(item))
            .catch(e => console.log(e))
    })
    app.get('/item/:_id', (req, res) => {
        Item.findById(req.params._id)
            .populate('category')
            .then(item => res.json(item))
            .catch(e => console.log(e))
    })
    app.post('/item', (req, res) => {
        Item.create(req.body)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.put('/item/:_id', (req, res) => {
        Item.findByIdAndUpdate({ _id: req.params._id }, { $set: req.body })
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.delete('/item/:_id', (req, res) => {
        Item.findByIdAndDelete(req.params._id)
            .then(res.sendStatus(200))
            .catch(e => console.log(e))
    })
}


// This is the code to upload images into the database
// app.post(‘/api/photo’, function (req, res) {
//     var newItem = new Item();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = ‘image / png’;
//     newItem.save();
// });

// This website explains how to upload photos into the database https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d