const express = require('express');
const router = express.Router();
const followerController = require('../controllers/followers.controller');

router.post('/', followerController.getFollowers)

module.exports = router;
