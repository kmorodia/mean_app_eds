const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const config = require('./config/database');

const User = require('./models/users');

const app = express();
const employees = require('./routes/employees');

const port = 3000;

//CORS middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyparser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	User.getUser(username, (user) => {
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, (isMatch) => {
			if(isMatch){
				console.log("pw matched: "+ password + user.password);
				const token = jwt.sign(user, config.secret, {
					expiresIn: 604800
				});

				res.json({
					success: true,
					token: 'bearer '+token,
					user: user.emailid
				});
			}
			else{
				console.log("pw matched: "+ password + user.password);
				return res.json({success: false, msg: 'Wrong Password'});
			}
		});
	});
});

app.use('/employees', employees);

app.get('/', (req, res) => {
	res.send('Login Page');
});

app.listen(port, () => {
	console.log("Server started on port "+port);
});