const express = require('express');

//import home_controller 
const homeController = require('../controllers/home_controller')


const route = express.Router();

route.get('/', homeController.home)
console.log('route loaded');

module.exports = route;