const express = require('express');
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');


router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.send('employees');
});

module.exports = router;