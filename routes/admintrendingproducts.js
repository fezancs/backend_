var express = require('express');
var router = express.Router();
var model = require('../models/admintrendingproducts-model');

router.get('/', function(req, res) {
    model.gettrendingproducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addtrendingproducts(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletetrendingproducts(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;