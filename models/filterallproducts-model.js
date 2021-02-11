var db = require("../db");

let model = {
    filterallproducts: (cb) => {
        return db.query("SELECT price , thumbnail , thumbnail_label , sale , visibility , rating , sale_percent , shipping FROM catalog_product", cb)
    },
    getfilterproduct: (filterkeyord,offset, limit,cb) => {
        return db.query("SELECT price , thumbnail , thumbnail_label , sale , visibility , rating , sale_percent FROM catalog_product WHERE sku LIKE ? LIMIT ?, ?",['%'+filterkeyord+'%',+offset, +limit], cb)
    },
    getTotalProducts: (filterkeyord,cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product  WHERE sku LIKE ?" , [filterkeyord] , cb);
    }
}

module.exports=model;