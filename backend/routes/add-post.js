const express = require('express');
const router = express.Router();
const { Post } = require('../models');

router.post('/', async function (req, res) {
    const { title, text } = req.body;
    const authorId = req.user.id;
    const date = new Date();

    await Post.create({ title, text, date, authorId });
    return res.status(201).json({message: 'Post added!'});
});

module.exports = router;
