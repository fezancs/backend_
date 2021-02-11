var db = require("../db");

let model = {
    gettrendingnews: (cb) => {
        return db.query("SELECT * FROM trendingnews", cb)
    },
   
    addtrendingnews: (input, cb) => {
        let data = {
            news : input.news,
            createdat :input.createdat
        }
        return db.query("INSERT INTO trendingnews SET ?", [data], cb)
    },
    deletetrendingnews: (id, cb) => {
        return db.query("DELETE FROM trendingnews WHERE id=?", [id], cb);
    }
}

module.exports=model;