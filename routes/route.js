const express=require('express')
const route=express.Router()
const cd_controller = require('../controllers/cd')
const user_controller = require('../controllers/user')
const sell_controller = require('../controllers/sell')



route.get('/cdlist',cd_controller.cdlist)
route.post('/addcd',cd_controller.addcd)
route.put('/editcd/:id',cd_controller.editcd)
route.delete('/rmcd',cd_controller.rmcd)

route.get('/name',user_controller.getname)
route.post('/login',user_controller.login)
route.post('/registration',user_controller.registration)
route.put('/changeppw',user_controller.updatePassword)
//route.get('/selling',sell_controller.selling)
//route.post('/addsell',validate(sellSchema),sell_controller.addsell)
//route.put('/editsell',validate(sellSchema),sell_controller.editsell)
//route.delete('/rmsell',validate(sellSchema),sell_controller.rmsell)

module.exports = route 