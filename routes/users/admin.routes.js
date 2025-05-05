const express = require('express');
const router = express.Router();

const getUsers = require('../../controller/admin/getusers.controller');
const changeRol = require('../../controller/admin/changerol.controller');

const checkToken = require('../../middlewares/auth.middleware');

const param = 'Administrador'


router.get('/industrialDirectors', checkToken,  getUsers.getIndustrialDirectors);
router.get('/softwareDirectors', checkToken, getUsers.getSoftwareDirectors);
router.get('/sportDirectors', checkToken, getUsers.getSportDirectors);


router.get('/industrialStudents', checkToken, getUsers.getIndustrialStudents);
router.get('/softwareStudents', checkToken, getUsers.getSoftwareStudents);
router.get('/sportStudents', checkToken, getUsers.getSportStudents);

router.patch('/changeRol', checkToken, changeRol.changeRol);


module.exports = router;
