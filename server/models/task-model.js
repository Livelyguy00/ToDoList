const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tasks = new Schema(
  {
    name: { type: String, required: true },
    description: {type: String, required: false},
    creator: { type: String, required: true },
    important: { type: Boolean, required: false, default: false }
  }
)

module.exports = mongoose.model('tasks', Tasks)