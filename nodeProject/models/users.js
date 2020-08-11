const user1 = {
	"emailid": "user1.gmail.com",
	"password": "password1"
};

module.exports.getUser = function(callback){
	callback(user1);
}

module.exports.comparePassword = function(candidatePassword, storedPassword, callback){
	callback(candidatePassword==storedPassword);
}