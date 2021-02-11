var express = require('express');
var router = express.Router();
var model = require('../models/filterallproducts-model');

router.get('/', function(req, res) {
    
     model.filterallproducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:filterkeyord/:offset/:limit', function(req, res) {
    let offset = req.params.offset;
    let limit = req.params.limit;
    console.log(offset);
    console.log(limit);
    let filterkeyord = req.params.filterkeyord;
    // model.getfilterproduct(filterkeyord, function(err, result) {
    //     res.json({data: result, error: err});
    // })
    model.getfilterproduct(filterkeyord,offset, limit,function(err, results) {
        if(err) {
            res.json(err)
        } else {
          model.getTotalProducts(filterkeyord,function(err, result) {
             if(err) {
                 res.json(err)
             } else {
                 res.json({data:results , total: result[0].total});
             }
          })
        }
    })

})

module.exports = router;