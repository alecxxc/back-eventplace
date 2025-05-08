const express = require('express');
const router = express.Router();
const userController = require('../../controller/user/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/recommendedevent', userController.recommendedEvent);
router.get('/eventsforyear', userController.eventsForYear);

module.exports = router;