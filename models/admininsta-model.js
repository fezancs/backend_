var db = require("../db");

let model = {
    getinstaposts: (cb) => {
        return db.query("SELECT * FROM insta", cb)
    },
   
    getinstapost: (id, cb) => {
        return db.query("SELECT * FROM insta WHERE id=?", [id], cb)
    },
    
    addinstapost: (input, cb) => {

        let data = {
            title : input.title ,
            imagepath:input.imagepath,
            link:input.link,
            subtitle :input.subtitle,   
            createdat : input.createdat,
        }
        return db.query("INSERT INTO insta SET ?", [data], cb)
    },

    updateinstapost: (input, cb) => {
 
        let data = {
            title : input.title ,
            imagepath:input.imagepath,
            link:input.link,
            subtitle :input.subtitle,   
            createdat : input.createdat,  
        }
        return db.query("UPDATE insta SET ? where id=?", [data,input.id], cb)
    },

    deleteinstapost: (id, cb) => {
        return db.query("DELETE FROM insta WHERE id=?", [id], cb);
    }
}

module.exports=model;