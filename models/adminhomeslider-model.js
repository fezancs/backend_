var db = require("../db");

let model = {
    gethomesliders: (cb) => {
        return db.query("SELECT * FROM homeslider", cb)
    },
   
    gethomeslider: (id, cb) => {
        return db.query("SELECT * FROM homeslider WHERE id=?", [id], cb)
    },
    
    addhomeslider: (input, cb) => {

        let data = {
            title : input.title ,
            imagepath:input.imagepath,
            orgtitle:input.orgtitle,
            subtitle :input.subtitle,   
            createdat : input.createdat,
        }
        return db.query("INSERT INTO homeslider SET ?", [data], cb)
    },

    updatehomeslider: (input, cb) => {
 
        let data = {
            title : input.title ,
            imagepath:input.imagepath,
            orgtitle:input.orgtitle,
            subtitle :input.subtitle,   
            createdat : input.createdat,  
        }
        return db.query("UPDATE homeslider SET ? where id=?", [data,input.id], cb)
    },

    deletehomeslider: (id, cb) => {
        return db.query("DELETE FROM homeslider WHERE id=?", [id], cb);
    }
}

module.exports=model;