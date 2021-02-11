var db = require("../db");

let model = {
    getsortedproductsbyprice: (offset, limit,cb) => {
        return db.query('SELECT price , thumbnail , thumbnail_label , sale , visibility , rating , sale_percent, shipping FROM catalog_product ORDER BY price ASC  LIMIT ?, ? ' ,[+offset, +limit] ,cb)
    },
    getTotalsortedproductsbyprice: (cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product  ORDER BY price ASC", cb);
    },
    getsortedproductsbyname: (offset, limit,cb) => {
        return db.query('SELECT price , thumbnail , thumbnail_label , sale , visibility , rating , sale_percent , shipping FROM catalog_product ORDER BY thumbnail_label ASC LIMIT ?, ? ',[+offset, +limit] ,cb)
    },
    getTotalsortedproductsbyname: (cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product  ORDER BY thumbnail_label ASC", cb);
    },  
}

module.exports=model;