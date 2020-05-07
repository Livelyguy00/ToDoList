const express = require('express')

const TasksCtrl = require('../controllers/tasks-ctrl')

const router = express.Router()

router.post('/addtask', TasksCtrl.newTask)
router.get('/fetchtasks', TasksCtrl.fetchTasks)

module.exports = router