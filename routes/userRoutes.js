const { User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

module.exports = app => {
  app.post('/verify', passport.authenticate('jwt', { session: false }),
    (req, res) => res.sendStatus(200))

  app.post('/register', (req, res) => {
    User.register(new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
      company: req.body.company
    }), req.body.password, e => {
      if (e) throw e
      User.authenticate()(req.body.username, req.body.password, (e, user) => {
        if (e) throw e
        res.json({ isLoggedIn: !!user, user: user.username, token: jwt.sign({ id: user._id }, 'hotdog') })
      })
    })
  })
  app.post('/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (e, user) => {
      if (e) throw e
      res.json({ isLoggedIn: !!user, user: user.username, token: jwt.sign({ id: user._id }, 'hotdog') })
    })
  })
}
