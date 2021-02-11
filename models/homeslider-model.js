var db = require("../db");

let model = {
    gethomeslider: (cb) => {
        return db.query("SELECT * FROM homeslider", cb)
    },

    gettrendingnews: (cb) => {
        return db.query("SELECT * FROM trendingnews", cb)
    },
    
}

module.exports=model;