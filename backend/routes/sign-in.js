const express = require('express');
const router = express.Router();
const signInController = require('../controllers/sign-in.controller');

router.post('/', signInController.getUser)

module.exports = router;
