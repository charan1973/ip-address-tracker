const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	identifier: {
		type: String,
		unique: true,
		required: true
	},
	identifierType: {
		type: String,
		required: true
	},
	sawoUserId: {
		type: String,
		required: true
	},
	userIp: {
		type: String,
	}
})

const User = mongoose.model("User", userSchema)

module.exports = User;