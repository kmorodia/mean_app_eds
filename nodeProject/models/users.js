const user1 = {
	"emailid": "user1@gmail.com",
	"password": "password1"
};

const user2 = {
	"emailid": "user2@gmail.com",
	"password": "password2"
};

module.exports.getUser = function(username, callback){
	if(user1['emailid']==username){
		callback(user1);
		return;
	}
	if(user2['emailid']==username){
		callback(user2);
		return;
	}
	else{
		callback(null);
		return;
	}
}

module.exports.comparePassword = function(candidatePassword, storedPassword, callback){
	callback(candidatePassword==storedPassword);
}
