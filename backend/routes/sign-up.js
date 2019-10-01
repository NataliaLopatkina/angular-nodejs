const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/sign-up.controllers')

router.post('/', signUpController.createUser);

module.exports = router;
