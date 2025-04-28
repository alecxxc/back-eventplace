const express = require('express');
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const directorController = require('../../controller/director/director.controller');
const param = 'Director';

router.get('/checkevents', checkToken, checkRol([param]),directorController.checkEvents);

router.post('/createdevent', checkToken, checkRol([param]), directorController.createEvent);

router.put('/updateevent', checkToken, checkRol([param]), directorController.updateEvent);

router.delete('/deleteevent', checkToken,  checkRol([param]), directorController.deleteEvent);


module.exports = router;