const express = require('express');
const router = express.Router();

const adminController = require('../../controller/admin/admin.controller');


const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');



router.get('/industrialDirectors', checkToken, checkRol(process.env.PARAM1), adminController.getIndustrialDirectors);
router.get('/softwareDirectors', checkToken, checkRol(process.env.PARAM1), adminController.getSoftwareDirectors);
router.get('/sportDirectors', checkToken, checkRol(process.env.PARAM1), adminController.getSportDirectors);


router.get('/industrialStudents', checkToken, checkRol(process.env.PARAM1), adminController.getIndustrialStudents);
router.get('/softwareStudents', checkToken, checkRol(process.env.PARAM1), adminController.getSoftwareStudents);
router.get('/sportStudents', checkToken, checkRol(process.env.PARAM1), adminController.getSportStudents);

router.patch('/changeRol', checkToken, checkRol(process.env.PARAM1), adminController.changeRol);

router.get('/checkeventacademico', checkToken, checkRol(process.env.PARAM1), adminController.checkEventAcademico);
router.get('/checkeventcultural', checkToken, checkRol(process.env.PARAM1), adminController.checkEventCultural);
router.get('/checkeventdeportivo', checkToken, checkRol(process.env.PARAM1), adminController.checkEventDeportivo);
router.get('/checkeventartistico', checkToken, checkRol(process.env.PARAM1), adminController.checkEventArtistico);
router.get('/checkeventtecnologico', checkToken, checkRol(process.env.PARAM1), adminController.checkEventTecnologico);


module.exports = router;
