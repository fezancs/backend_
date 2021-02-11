var express = require('express');
var router = express.Router();
var model = require('../models/selectiveproducts-model');

router.get('/:min/:max/:offset/:limit', function(req, res) {
    let min = req.params.min;
    let max = req.params.max;
    let offset = req.params.offset;
    // console.log(offset);
   let limit = req.params.limit;
    model.getselectiveproducts(min,max,offset, limit,function(err, results) {
        if(err) {
            res.json(err)
        } else {
            model.getTotalProducts(min,max,function(err, result) {
               if(err) {
                   console.log(err)
                   res.json(err)
               } else {
                   res.json({data:results , total: result[0].total});
               }
            })
          }
    })
})

router.get('/bytype/:type/:offset/:limit', function(req, res) {
    let type = req.params.type;
    let offset = req.params.offset;
    let limit = req.params.limit;
    console.log("kkk");
    console.log(limit);
    model.getproductsbytype(type,offset, limit,function(err, results) {
        if(err) {
            res.json(err)
        } else {
            model.getTotalProductsbytype(type,function(err, result) {
               if(err) {
                   console.log(err)
                   res.json(err)
               } else {
                   res.json({data:results , total: result[0].total});
               }
            })
          }
    })
})


module.exports = router;