const express = require('express');
const router = express.Router();

const getUsers = require('../../controller/admin/getusers.controller');
const changeRol = require('../../controller/admin/changerol.controller');

const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');

const PARAM = 'Administrador'


router.get('/industrialDirectors', checkToken, checkRol(PARAM), getUsers.getIndustrialDirectors);
router.get('/softwareDirectors', checkToken, checkRol(PARAM), getUsers.getSoftwareDirectors);
router.get('/sportDirectors', checkToken, checkRol(PARAM), getUsers.getSportDirectors);


router.get('/industrialStudents', checkToken, checkRol(PARAM), getUsers.getIndustrialStudents);
router.get('/softwareStudents', checkToken, checkRol(PARAM), getUsers.getSoftwareStudents);
router.get('/sportStudents', checkToken, checkRol(PARAM), getUsers.getSportStudents);

router.patch('/changeRol', checkToken, checkRol(PARAM), changeRol.changeRol);


module.exports = router;
