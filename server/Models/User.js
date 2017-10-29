const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	avatar: String,
	providerId: String,
	username: String,
	blog: String,
	email: String,
	location: String,
	bio: String
});

mongoose.model('users', userSchema);
