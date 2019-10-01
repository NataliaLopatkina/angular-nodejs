const postService = require('../services/post');

exports.createPost = async function(req, res, next) {
    const { title, text } = req.body;
    const authorId = req.user.id;
    const date = new Date();
    const query = { title, text, date, authorId };

    try {
        await postService.createPost(query);
        return res.status(201).json({ message: 'Post added!' });
    }

    catch (e) {
        return res.json({ message: 'Post not added!' })
    }
}
