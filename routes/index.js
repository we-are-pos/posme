module.exports = app => {
  require('./userRoutes.js')(app)
  require('./companyRoutes.js')(app)
  require('./categoryRoutes.js')(app)
  require('./itemRoutes.js')(app)
  require('./orderRoutes.js')(app)
}
