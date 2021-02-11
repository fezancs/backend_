var db = require("../db");

let model = {
    getselectiveproducts: (min,max,offset, limit,cb) => {
        return db.query("SELECT price , thumbnail , thumbnail_label , sale ,visibility ,rating ,sale_percent , shipping from catalog_product where price between ? AND ? LIMIT ?, ?",[min,max,+offset, +limit], cb)
    },
    getTotalProducts: (min,max,cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product where price between ? AND ?",[min,max], cb);
    },
    getproductsbytype: (type,offset, limit,cb) => {
        return db.query("SELECT price , thumbnail , thumbnail_label , sale ,visibility ,rating ,sale_percent , shipping from catalog_product where _type=? LIMIT ?, ?",[type,+offset, +limit], cb)
    },
    getTotalProductsbytype: (type,cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product where _type=?",[type], cb);
    },
   
}

module.exports=model;