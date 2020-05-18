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
    user: req.query.user,
    succeed: false
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
  }).sort({ important: -1 })
}

fetchTask = async(req, res) => {
  Task.find({
    _id: req.query.task
  }, (err, task) => {
    if(err){
      console.log(err)
    }
    if(task){
      res.status(200).json({
        success: true,
        data: task
      })
    }
  })
}

deleteTask = async(req, res) => {
  Task.deleteOne({_id: req.query.task}, (err, deleted) => {
    if(err){
      console.log(err)
    }
    if(deleted){
      res.status(200).json({
        success: true,
        message: 'Task has been deleted'
      })
    }
  })
}

module.exports = {
  newTask,
  fetchTasks,
  fetchTask,
  deleteTask
}