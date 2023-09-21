const express = require('express');
const friendController = require('../controllers/friend');
const asyncRouteHandler = require('../util/asyncRouteHandler')

const router = express.Router()


router.post('/add-friend', asyncRouteHandler(friendController.addFriend));

router.get('/friends/:id', asyncRouteHandler(friendController.getFriends));

module.exports = router;