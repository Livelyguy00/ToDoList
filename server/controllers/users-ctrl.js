const CryptoJS = require('crypto-js')
const User = require('../models/user-model')

register = (req, res) => {
  const body = req.body
  
  body.password = CryptoJS.AES.encrypt(body.password,'key').toString();

  if(!body){
    return res.status(400).json({
      success: false,
      error: 'You must fill registration form'
    })
  }

  const user = new User(body)

  if(!user){
    return res.status(400).json({success: false, error: err})
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'Registration success'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Something went wrong'
      })
    })
}

login = (req, res) => {
  const body = req.body;

  if(!body){
    return res.status(400).json({
      success: false,
      error: 'You must fill login form'
    })
  }

  User.find({}, (err, user) => {
    console.log(CryptoJS.AES.encrypt(body.password, 'key').toString())
    if(err){
      return res.status(400).json({success: false, error: err})
    }
     
    if(!user){
      return res.status(404).json({success: false, error: 'Incorrect login or password'})
    }
    
    return res.status(200).json({success: true, data: user._id})
  }).catch(err => console.log(err))
}

module.exports = {
  register,
  login
}