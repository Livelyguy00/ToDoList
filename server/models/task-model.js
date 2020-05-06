const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tasks = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    user: { type: String, required: true },
    important: { type: Boolean, required: false, default: false },
    succeed: { type: Boolean, required: false, default: false },
    date: { type: String, required: false, default: null }
  }
)

module.exports = mongoose.model('tasks', Tasks)