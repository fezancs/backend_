var db = require("../db");

let model = {
    gettrendingproducts: (cb) => {
        return db.query("SELECT * FROM trending_products", cb)
    },
   
    addtrendingproducts: (input, cb) => {
        let data = {
            sku : input.sku,
            createdat :input.createdat
        }
        return db.query("INSERT INTO trending_products SET ?", [data], cb)
    },
    deletetrendingproducts: (id, cb) => {
        return db.query("DELETE FROM trending_products WHERE id=?", [id], cb);
    }
}

module.exports=model;