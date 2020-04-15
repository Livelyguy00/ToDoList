const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/todolist', { useUnifiedTopology: true, useNewUrlParser: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
