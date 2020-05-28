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
        message: 'Task added',
        task: newTask
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

fetchChecked = async(req, res) => {
  Task.find({
    user: req.query.user,
    succeed: true
  }, (err, done_tasks) => {
    if(err){
      console.log(err)
    }
    if(done_tasks){
      res.status(200).json({
        success: true,
        data: done_tasks
      })
    }
  })
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

checkTask = async(req, res) => {
  const id = req.query.task
  Task.updateOne({_id: id}, { succeed: true }, (err, success) => {
    if(err){
      console.log(err)
    }
    if(success){
      res.status(200).json({
        success: true
      })
    }
  })
}

uncheckTask = async(req, res) => {
  const id = req.query.task
  Task.updateOne({_id: id}, {succeed: false}, (err, success) => {
    if(err){
      console.log(err)
    }
    if(success){
      res.status(200).json({
        success: true
      })
    }
  })
}

module.exports = {
  newTask,
  fetchTasks,
  fetchChecked,
  fetchTask,
  deleteTask,
  checkTask,
  uncheckTask
}