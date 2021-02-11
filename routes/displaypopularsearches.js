var express = require('express');
var router = express.Router();
var model = require('../models/displaypopularsearches-model');

router.get('/', function(req, res) {
    model.getdisplaypopularsearches(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/trendingproducts', function(req, res) {
    model.gettrendingproducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})


module.exports = router;