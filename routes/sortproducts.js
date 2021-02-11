var express = require('express');
var router = express.Router();
var model = require('../models/sortproducts-model');

router.get('/price/:offset/:limit', function(req, res) {
    // model.getsortedproductsbyprice(function(err, result) {
    //     if(err) {
    //         res.json(err)
    //     } else {
    //         res.json(result);
    //     }
    // })
    
    let offset = req.params.offset;
    let limit = req.params.limit;
    model.getsortedproductsbyprice(offset, limit,function(err, results) {
        if(err) {
            res.json(err)
        } else {
          model.getTotalsortedproductsbyprice(function(err, result) {
             if(err) {
                 res.json(err)
             } else {
                 res.json({data:results , total: result[0].total});
             }
          })
        }
    })

})
router.get('/name/:offset/:limit', function(req, res) {
    let offset = req.params.offset;
    let limit = req.params.limit;
    // model.getsortedproductsbyname(function(err, result) {
    //     if(err) {
    //         res.json(err)
    //     } else {
    //         res.json(result);
    //     }
    // })
    model.getsortedproductsbyname(offset, limit,function(err, results) {
        if(err) {
            res.json(err)
        } else {
          model.getTotalsortedproductsbyname(function(err, result) {
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