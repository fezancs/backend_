var express = require('express');
var router = express.Router();
var model = require('../models/admininsta-model');
var multer = require('multer');
 
   
router.get('/', function(req, res) {
    model.getinstaposts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getinstapost(id, function(err, result) {
       if(err) {
        res.json(err)
    } else {
        res.json(result);
    }
    })
})

router.post('/add',  function(req, res) {   
    console.log(req.body);
    model.addinstapost(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updateinstapost(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deleteinstapost(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;