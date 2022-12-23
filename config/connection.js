const mongoose = require('mongoose')

//We are only interested in running this application locally (not deploying to heroku)
mongoose.connect('mongodb://localhost', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose.connection;