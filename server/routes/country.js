var express = require('express');
var router = express.Router();
var Country = require('../models/master/Country');
var countryController = require('../controllers/country');

router.get('/',countryController.get)
router.post('/',countryController.save)
router.post('/:id',countryController.update); 
module.exports = router;