const express = require('express')

const UsersCtrl = require('../controllers/users-ctrl')

const router = express.Router()

router.post('/signup', UsersCtrl.register)
router.post('/signin', UsersCtrl.login)

module.exports = router