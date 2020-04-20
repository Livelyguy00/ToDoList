const express = require('express')

const UsersCtrl = require('../controllers/users-ctrl')

const router = express.Router()

router.post('/signup', UsersCtrl.register)
router.post('/signin', UsersCtrl.login)
router.get('/users', UsersCtrl.fetchUsers)
router.get('/user', UsersCtrl.fetchUser)

module.exports = router