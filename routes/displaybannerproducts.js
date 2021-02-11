var express = require('express');
var router = express.Router();
var model = require('../models/displaybannerproducts-model');

router.get('/', function(req, res) {
    
     model.bannerproducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            console.log(result);
            res.json(result);
        }
    })
})

module.exports = router;