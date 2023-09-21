const User = require("../models/User");
const Friend = require("../models/friend");

exports.addUser = async (req, res, next) => {
    const { name, age, phone_no } = req.body;

    const user = new User({
        name: name,
        age : age,
        phone_no: phone_no
    });

    await user.save();

    const friend = new Friend()
    friend.user_id = user._id;

    await friend.save();

    res.json({
        message: 'User added successfully.',
        user: user
    })
}