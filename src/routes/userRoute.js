// importing packages
const express = require('express')
// importing conttrollers
const {GetController,PostController,PutController,DeleteController} = require('../controllers/usercontroller.js')
// Creating a new router instance same as we created an app instance of express
const userRouter = express.Router()

// Setting up CRUD operations GET,POST,PUT,DELETE

userRouter.get('/:id',GetController)
userRouter.post('/',PostController)
userRouter.put('/:id',PutController)
userRouter.delete('/:id',DeleteController)

module.exports = userRouter