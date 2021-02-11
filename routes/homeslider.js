var express = require('express');
var router = express.Router();
var model = require('../models/homeslider-model');

router.get('/', function(req, res) {
    model.gethomeslider(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/trendingnews', function(req, res) {
    model.gettrendingnews(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})


module.exports = router;