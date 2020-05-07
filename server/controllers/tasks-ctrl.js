const Task = require('../models/task-model')

newTask = async (req, res) => {
  if(!req.body){
    res.status(400).json({
      success: false,
      message: 'You must give your task a name'
    })
  }

  const task = {...req.body.task};
  const body = Object.assign({}, task, {
    user: req.body.user
  })

  const newTask = new Task(body)
  newTask
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Task added'
      })
    })
    .catch(err => console.log(err))
}

fetchTasks = async (req, res) => {
  Task.find({
    user: req.query.user
  }, (err, tasks) => {
    if(err){
      console.log(err)
    }
    if(tasks){
      res.status(200).json({
        success: true,
        data: tasks
      })
    }
  })
}

module.exports = {
  newTask,
  fetchTasks
}