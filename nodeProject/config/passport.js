const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/users');
const config = require('../config/database');

module.exports = function(passport){
	let opts={};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = config.secret;
	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		console.log("config/passport");
		User.getUser((user) => {
			if(!user){
				return done(null, false);
			}
			else{
				return done(null, user);
			}
		});
	}));
}