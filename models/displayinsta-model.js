var db = require("../db");

let model = {
    getinsta: (cb) => {
        return db.query("SELECT * from insta ", cb)
    },
    
}

module.exports=model;