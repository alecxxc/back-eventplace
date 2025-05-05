const express = require('express'); 
const router = express.Router();

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const studentController = require('../../controller/student/student.controller')

const PARAM = 'Estudiante';

router.get('/profile', checkToken, checkRol(PARAM), studentController.getData);

router.patch('/profile/changename', checkToken, checkRol(PARAM), studentController.updateName);



module.exports = router;