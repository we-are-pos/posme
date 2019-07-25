const multer = require("multer");
const fs = require("fs");
const { Item, Tab } = require("../models");

module.exports = app => {
  // SET STORAGE
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "uploads");
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    }
  });

  var upload = multer({ storage: storage });

  app.get("/item", (req, res) => {
    Item.find({where: req.body.tabs})
      .then(item => res.json(item))
      .catch(e => console.log(e));
  });
  app.get("/item/:_id", (req, res) => {
    Item.findById(req.params._id)
      .populate("tab")
      .then(item => res.json(item))
      .catch(e => console.log(e));
  });

  app.post("/item", upload.single("img"), (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let inventory = req.body.inventory;
    console.log(req);
    console.log(name);
    console.log(price);
    console.log(inventory);
    Item.create({ name, price, inventory })
      .then(response => console.log(response))
      .catch(err => console.log(err));
      
  app.post("/item", upload.single("picture"), (req, res) => { 
    // multer attaches image url to req.file.filename
    // req.body.img = `/${req.file.filename}`
    Item.create(req.body)
      .then(({ _id, tab }) => {
        Tab.updateOne({ _id: tab }, { $push: { items: _id } })
          .then(res.sendStatus(200))
          .catch(e => res.json(e));
      })
      .catch(e => console.log(e));
  });
  // app.post("/item", upload.single("picture"), (req, res) => {
  //   // multer attaches image url to req.file.filename
  //   console.log(req.file);
  //   req.body.img = `/${req.file.filename}`;
  //   Item.create(req.body)
  //     .then(({ _id, tab }) => {
  //       Tab.updateOne({ _id: tab }, { $push: { items: _id } })
  //         .then(res.sendStatus(200))
  //         .catch(e => res.json(e));
  //     })
  //     .catch(e => console.log(e));
  // });
  app.put("/item/:_id", (req, res) => {
    Item.findByIdAndUpdate({ _id: req.params._id }, { $set: req.body })
      .then(res.sendStatus(200))
      .catch(e => console.log(e));
  });
  app.delete("/item/:_id", (req, res) => {
    Item.findByIdAndDelete(req.params._id)
      .then(res.sendStatus(200))
      .catch(e => console.log(e));
  });

// This is the code to upload images into the database
// app.post(‘/api/photo’, function (req, res) {
//     var newItem = new Item();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = ‘image / png’;
//     newItem.save();
// });

// This website explains how to upload photos into the database https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d
