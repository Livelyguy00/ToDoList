const CryptoJS = require('crypto-js')
const User = require('../models/user-model')
const jwt = require('jsonwebtoken')

const JWT_KEY = 'jwtsecretkeyxD'

//rejestracja
register = async (req, res) => {
  const body = req.body
  
  body.password = CryptoJS.SHA1(body.password).toString();

  if(!body){
    return res.status(400).json({
      success: false,
      message: 'You must fill registration form'
    })
  }

  await User.find({
    email: body.email,
    password: body.password
  },(err, users) => {
    if(err){
      res.status(400).json({success: false, message: err})
    }

    if(users.length >= 1){
      res.status(200).json({success: false, message: 'This user has been already created'})
    }
    else{
      const user = new User(body)
      user
        .save()
        .then(() => {
          return res.status(201).json({
            success: true,
            message: 'Registration success'
          })
        })
    }
  })
}

//logowanie
login = async (req, res) => {
  console.log(req.headers)
  const body = req.body;

  if(!body){
    return res.status(400).json({
      success: false,
      error: 'You must fill login form'
    })
  }

  await User.findOne({
    email: body.email,
    password: CryptoJS.SHA1(body.password).toString()
  }, (err, user) => {
    if(err){
      return res.status(400).json({success: false, error: err})
    }
     
    if(!user){
      return res.status(404).json({success: false, error: 'Incorrect login or password'})
    }
    
    if(user){
      const token = jwt.sign({
        userId: user._id
      }, 
      JWT_KEY, 
      {
        expiresIn: "1h"
      })
      return res.status(200).json({
        token: token,
        message: 'Login success'
      })
    }
  }).catch(err => console.log(err))
}

//users
fetchUsers = (req, res) => {
  User.find((err, users) => {
    if(err){
      return res.status(400).json({
        success: false,
        error: err
      })
    }
    if(users){
      return res.status(200).json({
        success: true,
        data: users
      })
    }
  })
}

//fetching user by token
fetchUser = (req, res) => {
  return res
}

module.exports = {
  register,
  login,
  fetchUsers
}