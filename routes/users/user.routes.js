const express = require('express');
const router = express.Router();
const userController = require('../../controller/user/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/recommendedEvent', userController.recommendedEvent);

module.exports = router;