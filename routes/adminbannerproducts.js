var express = require('express');
var router = express.Router();
var model = require('../models/adminbannerproducts-model');

router.get('/', function(req, res) {
    model.getbannerproducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getbannerproduct(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addbannerproduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatebannerproduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletebannerproduct(id, function(err, result) {
        res.json({data: result, error: err});
    })
})


module.exports = router;