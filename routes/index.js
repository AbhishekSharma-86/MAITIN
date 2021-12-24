const express = require('express');

//import home_controller 
const homeController = require('../controllers/home_controller')


const router = express.Router();

router.get('/', homeController.home)
router.use('/users', require('./users'));
console.log('route loaded');

module.exports = router;