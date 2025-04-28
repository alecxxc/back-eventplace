const express = require('express');
const router = express.Router();

const getUsers = require('../../controller/admin/getusers.controller');
const changeRol = require('../../controller/admin/changerol.controller');

const checkToken = require('../../middlewares/auth.middleware');

const checkRol = require('../../middlewares/checkRol.middleware');
const param = 'Administrador'


router.get('/industrialDirectors', checkToken, checkRol([param]), getUsers.getIndustrialDirectors);
router.get('/softwareDirectors', checkToken, checkRol([param]), getUsers.getSoftwareDirectors);
router.get('/sportDirectors', checkToken, checkRol([param]), getUsers.getSportDirectors);


router.get('/industrialStudents', checkToken, checkRol([param]), getUsers.getIndustrialStudents);
router.get('/softwareStudents', checkToken, checkRol([param]), getUsers.getSoftwareStudents);
router.get('/sportStudents', checkToken, checkRol([param]), getUsers.getSportStudents);

router.patch('/changeRol', checkToken, checkRol([param]), changeRol.changeRol);


module.exports = router;
