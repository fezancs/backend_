var express = require('express');
var router = express.Router();
var model = require('../models/selectiveproducts-model');

router.get('/:type/:offset/:limit', function(req, res) {
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