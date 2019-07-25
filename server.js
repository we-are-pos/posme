require("dotenv").config();
const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-local");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("./models");
const { join } = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const secret = process.env.SECRET;
const fs = require("fs");
const bodyParser = require("body-parser");

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
app.use(express.static(join(__dirname, "uploads")));

routes(app);

require("mongoose")
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(_ => {
    app.listen(PORT, () => {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  })
  .catch(e => console.log(e));

console.log("hi");
