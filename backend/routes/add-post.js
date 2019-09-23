const express = require('express');
const router = express.Router();
const { Post } = require('../sequelize');

router.post('/', async function (req, res) {
    const { title, text } = req.body;
    //const id = req.user.id;
    const author_id = 15; // Брать из токена
    const date = new Date();

    await Post.create({ title, text, date, author_id });
    return res.status(201).json({message: 'Post added!'});
});

module.exports = router;
