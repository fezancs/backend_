var db = require("../db");

let model = {
    getbannerproducts: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku, bannerproducts.id , bannerproducts.createdat , bannerproducts.bannerimage  FROM bannerproducts INNER JOIN catalog_product ON bannerproducts.sku=catalog_product.sku ", cb)
    },
   
    getbannerproduct: (id, cb) => {
        return db.query("SELECT * FROM bannerproducts WHERE id=?", [id], cb)
    },
    
    addbannerproduct: (input, cb) => {
        let data = {
            sku : input.sku,
            bannerimage:input.bannerimage,
            createdat :input.createdat
        }
        return db.query("INSERT INTO bannerproducts SET ?", [data], cb)
    },
    updatebannerproduct: (input, cb) => {
        let data = {
            sku : input.sku,
            bannerimage:input.bannerimage,
            createdat :input.createdat  
        }
        return db.query("UPDATE bannerproducts SET ? where id=?", [data,input.id], cb)
    },
    deletebannerproduct: (id, cb) => {
        return db.query("DELETE FROM bannerproducts WHERE id=?", [id], cb);
    },
   
}

module.exports=model;