var db = require("../db");

let model = {
    getdisplaypopularsearches: (cb) => {
        return db.query("SELECT * from popularsearches ", cb)
    },
    gettrendingproducts: (cb) => {
        return db.query("SELECT catalog_product.thumbnail , catalog_product.short_description FROM trending_products INNER JOIN catalog_product ON trending_products.sku=catalog_product.sku ", cb)
    },
     
}

module.exports=model;