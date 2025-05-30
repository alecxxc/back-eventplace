const express = require('express');
const router = express.Router();

const adminController = require('../../controller/admin/admin.controller');


const checkToken = require('../../middlewares/auth.middleware');
const checkRol = require('../../middlewares/checkRol.middleware');



router.get('/industrialDirectors', adminController.getIndustrialDirectors);
router.get('/softwareDirectors', adminController.getSoftwareDirectors);
router.get('/sportDirectors', adminController.getSportDirectors);


router.get('/industrialStudents', adminController.getIndustrialStudents);
router.get('/softwareStudents', adminController.getSoftwareStudents);
router.get('/sportStudents', adminController.getSportStudents);

router.patch('/changeRol', adminController.changeRol);

router.get('/checkeventacademico', adminController.checkEventAcademico);
router.get('/checkeventcultural', adminController.checkEventCultural);
router.get('/checkeventdeportivo', adminController.checkEventDeportivo);
router.get('/checkeventartistico', adminController.checkEventArtistico);
router.get('/checkeventtecnologico', adminController.checkEventTecnologico);


module.exports = router;
