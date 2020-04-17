const CryptoJS = require('crypto-js')
const User = require('../models/user-model')

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
    
    return res.status(200).json({success: true, data: user._id, message: 'Login success'})
  }).catch(err => console.log(err))
}

module.exports = {
  register,
  login
}