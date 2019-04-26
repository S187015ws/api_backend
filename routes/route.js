const express=require('express')
const route=express.Router()
const cd_controller = require('../controllers/cd')
const sell_controller = require('../controllers/sell')
const cdSchema = require('../models/cd')
const sellSchema = require('../models/sell')
const {validate, ValidationError} = require('express-json-validator')

route.get('/cdlist',cd_controller.cdlist)
route.post('/addcd',validate(cdSchema),cd_controller.addcd)
route.put('/editcd',validate(cdSchema),cd_controller.editcd)
route.delete('/rmcd',validate(cdSchema),cd_controller.rmcd)
route.get('/selling',sell_controller.selling)
route.post('/addsell',validate(sellSchema),sell_controller.addsell)
route.put('/editsell',validate(sellSchema),sell_controller.editsell)
route.delete('/rmsell',validate(sellSchema),sell_controller.rmsell)

module.exports = route 