const signUpRouter = require('./sign-up');
const signInRouter = require('./sign-in');
const userRouter = require('./users');
const addPostRouter = require('./add-post');
const followingRouter = require('./following')
const postsRouter = require('./posts');

module.exports = {
    signUpRouter,
    signInRouter,
    userRouter,
    addPostRouter,
    followingRouter,
    postsRouter,
}
