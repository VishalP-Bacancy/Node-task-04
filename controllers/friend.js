const User = require("../models/User");
const Friend = require("../models/friend");

exports.addFriend = async (req, res, next) => {
    
   const { userId, friendId} = req.body;

    const user = await User.findById(userId);

    if (!user) {
        throw new Error('User not found.');
    }

    const friend = await Friend.findOne({ user_id: userId });

    if(!friend) {
        throw new Error('User not found in friends collection.');
    }

    if(friend.friend_ids.includes(friendId)){
        throw new Error('The friend already is a friend.')
    }

    friend.friend_ids.push(friendId);

    await friend.save();    
    
    res.json({user, friend});
}


exports.getFriends = async (req, res, next) => {
    const userId = req.params.id;

    const user = await Friend.findOne({ user_id: userId}).populate('friend_ids', '-_id name age phone_no');
    const userName = await User.findById(user.user_id);


    res.json({ 
        user: userName.name,
        friends: user.friend_ids 
    })
}