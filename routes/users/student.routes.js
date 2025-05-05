const express = require('express'); 
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const studentController = require('../../controller/student/student.controller')

const PARAM = 'Estudiante';

router.get('/profile', checkToken, checkRol(PARAM), studentController.getData);

router.patch('/profile/changename', checkToken, checkRol(PARAM), studentController.updateName);

router.post('/subscription', checkToken, checkRol(PARAM), studentController.subscription);

router.get('/profile/showsubscriptions', checkToken, checkRol(PARAM), studentController.showSubscriptions);

router.delete('/profile/cancelsubscription', checkToken, checkRol(PARAM), studentController.cancelSubcription);

router.get('/availableevents', checkToken, checkRol(PARAM), studentController.availableEvents);

router.post('/comment', checkToken, checkRol(PARAM), studentController.comment);

router.get('/profile/showcomments', checkToken, checkRol(PARAM), studentController.showComments);

router.patch('/profile/editcomment', checkToken, checkRol(PARAM), studentController.editComment);

router.delete('/profile/deletecomment', checkToken, checkRol(PARAM), studentController.deleteComment);


module.exports = router;