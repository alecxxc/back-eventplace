const express = require('express');
const router = express.Router();
const userController = require('../../controller/user/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/featuredevents', userController.featuredEvents);
router.get('/galleryevents', userController.galleryEventsForYear);
router.post('/calendarevents', userController.calendarEvents);
router.get('/upcomingevents', userController.upcomingEvents);

module.exports = router;