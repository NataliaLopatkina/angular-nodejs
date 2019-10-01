const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users.controller');

router.get('/', userControllers.getUsers);

module.exports = router;
