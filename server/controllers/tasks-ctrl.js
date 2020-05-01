const Task = require('../models/task-model')

newTask = async (req, res) => {
  const body = req.body;
  if(!body){
    res.status(400).json({
      success: false,
      message: 'You must give your task a name'
    })
  }
  console.log(body)
}

module.exports = {
  newTask
}