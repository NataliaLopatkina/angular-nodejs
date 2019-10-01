const express = require('express');
const router = express.Router();
const addPostController = require('../controllers/add-post.controller');

router.post('/', addPostController.createPost)

module.exports = router;
