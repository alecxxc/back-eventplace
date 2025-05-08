const adminService = require('../../services/admin/admin.service');

exports.getIndustrialDirectors = async (req, res) => {
  try {
    const result = await adminService.getIndustrialDirectors();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSoftwareDirectors = async (req, res) => {
  try {
    const result = await adminService.getSoftwareDirectors();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSportDirectors = async (req, res) => {
  try {
    const result = await adminService.getSportDirectors();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
}


exports.getIndustrialStudents = async (req, res) => {
  try {
    const result = await adminService.getIndustrialStudents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSoftwareStudents = async (req, res) => {
  try {
    const result = await adminService.getSoftwareStudents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSportStudents = async (req, res) => {
  try {
    const result = await adminService.getSportStudents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.changeRol = async (req, res) => {
  try {
    const result = await adminService.changeRol(req.body);
    res.json({ success: true, data: result, message: 'Rol actualizado' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
  
exports.checkEventAcademico = async (req, res) => {
  try {
    const result = await adminService.checkEventAcademico();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  } 
};

exports.checkEventCultural = async (req, res) => {
  try {
    const result = await adminService.checkEventCultural();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.checkEventDeportivo = async (req, res) => {
  try {
    const result = await adminService.checkEventDeportivo();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.checkEventArtistico = async (req, res) => {
  try {
    const result = await adminService.checkEventArtistico();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.checkEventTecnologico = async (req, res) => {
  try {
    const result = await adminService.checkEventTecnologico();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};