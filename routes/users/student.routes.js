const express = require('express'); 
const router = express.Router();

const studentController = require('../../controller/student/student.controller');

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');
const param = 'Estudiante'

router.get('/profile', checkToken, checkRol([param]), studentController.getData);

router.patch('/profile/changename', checkToken, checkRol([param]), studentController.updateName);

router.post('/profile/subscription', checkToken, checkRol([param]), studentController.subscription);

router.get('/profile/showsubscriptions', checkToken, checkRol([param]), studentController.showSubscriptions);

router.delete('/profile/cancelsubscription', checkToken, checkRol([param]), studentController.cancelSubcription);

router.get('/profile/availableevents', checkToken, checkRol([param]), studentController.availableEvents);

router.post('/profile/comment', checkToken, checkRol([param]), studentController.comment);

router.get('/profile/showcomments', checkToken, checkRol([param]), studentController.showComments);

router.patch('/profile/editcomment', checkToken, checkRol([param]), studentController.editComment);

router.delete('/profile/deletecomment', checkToken, checkRol([param]), studentController.deleteComment);

module.exports = router;