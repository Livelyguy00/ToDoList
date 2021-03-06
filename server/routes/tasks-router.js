const express = require('express')

const TasksCtrl = require('../controllers/tasks-ctrl')

const router = express.Router()

router.post('/addtask', TasksCtrl.newTask)
router.get('/fetchtasks', TasksCtrl.fetchTasks)
router.get('/fetchtask', TasksCtrl.fetchTask)
router.get('/delete', TasksCtrl.deleteTask)
router.get('/check', TasksCtrl.checkTask)
router.get('/uncheck', TasksCtrl.uncheckTask)
router.get('/fetchchecked', TasksCtrl.fetchChecked)

module.exports = router