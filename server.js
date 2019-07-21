const express = require("express");
const fs = require("fs");
const passport = require("passport");
const { Strategy } = require("passport-local");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("./models");
const { join } = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const multer = require("multer");
const bodyParser = require("body-parser");
const secret = process.env.SECRET;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  require("express-session")({
    secret: "hotdog",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "hotdog"
    },
    (jwtPayload, cb) =>
      User.findById(jwtPayload.id)
        .then(user => cb(null, user))
        .catch(err => cb(err, null))
  )
);

app.use(express.static(join(__dirname, "client", "build")));

routes(app);

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

require("mongoose")
  .connect("mongodb://localhost/posme_db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(db => {
    console.log(db);
    app.post("/upload/photo", upload.single("picture"), (req, res) => {
      var img = fs.readFileSync(req.file.path);
      var encode_image = img.toString("base64");
      // Define a JSONobject for the image attributes for saving to database

      var finalImg = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_image, "base64")
      };
      console.log(finalImg);

      db.collection("images").insertOne(finalImg, (err, result) => {
        console.log(result);

        if (err) return console.log(err);

        console.log("saved to database");
        res.redirect("/");
      });
    });

    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  })
  .catch(e => console.log(e));

// app.use(multer({ dest: './uploads',
//   rename: function (fieldname, filename) {
//     return filename
//   }
// })
// )
