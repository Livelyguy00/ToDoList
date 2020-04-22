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
        userId: user._id,
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
  const header = req.headers['authorization']

  if(typeof header !== 'undefined'){
    const bearer = header.split(' ');
    const token = bearer[1]
    req.token = token

  }else{
    res.status(403)
  }

  jwt.verify(req.token, JWT_KEY, (err, authData) => {
    if(err){
      res.status(403);
    }
    else{
      res.json({
        message: 'Successful log in',
        authData
      })
    }
  })
};

module.exports = {
  register,
  login,
  fetchUsers,
  fetchUser
}