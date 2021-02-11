var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt'); 
var customersModel = require('./models/customers-model');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret123'; 


passport.use(new LocalStrategy(
    {
        usernameField: 'emailaddress',
        passwordField: 'password'
    },
    function(username, password, done) {
        customersModel.findOne(username, function(err, result) {
    
            if (err) { return done(err); }
    
            if (result.length === 0) {
                return done(null, false, {message: 'Incorrect username.'});
            }

            const user = result[0];
            
            bcrypt.compare(password, user.password_hash , function(err, result) {
                if ( ! result) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                return done(null, user);
            })

        })
    }
))


passport.use(new JwtStrategy(options, function(jwtPayload, done) {
    customersModel.findById(jwtPayload.sub, function(err, result) {
        if (err) {
            return done(err, false);
        }

        if (result.length === 0) {
            return done(null, false);
        }

        return done(null, result[0]);
    })
}))