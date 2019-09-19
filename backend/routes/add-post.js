const express = require('express');
const router = express.Router();
const { Post } = require('../sequelize');

router.post('/', async function (req, res) {
    const { title, text } = req.body;
    const id = req.user.id;

    console.log(req.body)

    // if (title === '' || text === '' ) {
    //     res.status(422).send('Title, text are required!');

    // } else {

    //     await Post.create({title, text})
    //     // sequelize.query(`INSERT INTO posts (title, text, date, author_id) VALUES('${title}',
    //     // '${text}', '${new Date().toISOString()}', ${id})`)
        
    //     res.status(201).send('Post added');
    // }
});

module.exports = router;

