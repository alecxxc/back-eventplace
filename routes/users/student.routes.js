const express = require('express'); 
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const studentController = require('../../controller/student/student.controller');


router.get('/profile', checkToken, checkRol(process.env.PARAM3), studentController.getData);

router.patch('/profile/changename', checkToken, checkRol(process.env.PARAM3), studentController.updateName);

router.post('/subscription', checkToken, checkRol(process.env.PARAM3), studentController.subscription);

router.get('/profile/showsubscriptions', checkToken, checkRol(process.env.PARAM3), studentController.showSubscriptions);

router.delete('/profile/cancelsubscription', checkToken, checkRol(process.env.PARAM3), studentController.cancelSubcription);

router.get('/availableevents', checkToken, checkRol(process.env.PARAM3), studentController.availableEvents);


module.exports = router;