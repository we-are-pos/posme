const { User, Company } = require('../models')
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
      // Authenticates the user
      User.authenticate()(req.body.username, req.body.password)
        .then(({ user }) => {
          // Updates the company user array with the new user
          Company.updateOne({ _id: user.company }, { $push: { users: user._id } })
          // sends back JSON to be add to local storage
            .then(_ => res.json({ isLoggedIn: !!user, user: user.username, company: user.company, token: jwt.sign({ id: user._id }, 'hotdog') }))
            .catch(e => console.log(e))
        })
    })
  })

  app.post('/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (e, user) => {
      if (e) throw e
      res.json({ isLoggedIn: !!user, user: user.username, company: user.company, token: jwt.sign({ id: user._id }, 'hotdog') })
    })
  })
}
