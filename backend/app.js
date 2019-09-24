const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const verifyToken = require('./middelwares/verify-token');
const { signUpRouter, signInRouter, userRouter, addPostRouter, followingRouter, postsRouter } = require('./routes');

app.use(cors());
app.use(bodyParser());
app.use(cookieParser());

app.listen(3000);

app.use('/', signInRouter);
app.use('/sign-up', signUpRouter);
app.use('/users', verifyToken, userRouter);
app.use('/add-post', verifyToken, addPostRouter);
app.use('/following', verifyToken, followingRouter);
app.use('/posts', verifyToken, postsRouter);

module.exports = app;
