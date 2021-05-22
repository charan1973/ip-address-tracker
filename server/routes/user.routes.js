const router = require("express").Router();

const User = require("../models/User")

router.post("/create", async (req, res) => {

	const {identifier, identifier_type, user_id, userIp} = req.body;

	try {
		const getUser = User.findOne({sawoUserId: user_id})

		if(getUser){
			return res.status(200).json({message: "Login Success", success: true})
		}
		
		const user = new User({identifier, identifierType: identifier_type, sawoUserId: user_id, userIp })

		await user.save()

		return res.status(200).json({message: "Resgistration success", success: true})

	} catch(error) {
		return res.status(400).json({
			message: "failed",
			success: false
		})
	}

	
})

module.exports = router;