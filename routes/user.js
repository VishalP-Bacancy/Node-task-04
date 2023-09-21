const express = require('express');
const asyncRouteHandler = require('../util/asyncRouteHandler')
const userController = require('../controllers/user');

const router = express.Router()

router.post('/add-user', asyncRouteHandler(userController.addUser));

module.exports = router;