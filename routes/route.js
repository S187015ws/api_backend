const express=require('express')
const route=express.Router()
const cd_controller = require('../controllers/cd')
const sell_controller = require('../controllers/sell')


route.get('/cdlist',cd_controller)
route.get('/selling',sell_controller)
route.post('/addcd',cd_controller)
route.post('/addsell',sell_controller)
route.put('/editcd',cd_controller)
route.put('/editsell',sell_controller)
route.delete('/rmcd',cd_controller)
route.delete('/rmsell',sell_controller)

module.exports = route 