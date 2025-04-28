const getUsers = require('../../services/admin/getusers.service');

exports.getIndustrialDirectors = async (req, res) => {
  try {
    const result = await getUsers.getIndustrialDirectors();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSoftwareDirectors = async (req, res) => {
  try {
    const result = await getUsers.getSoftwareDirectors();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSportDirectors = async (req, res) => {
  try {
    const result = await getUsers.getSportDirectors();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
}


exports.getIndustrialStudents = async (req, res) => {
  try {
    const result = await getUsers.getIndustrialStudents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSoftwareStudents = async (req, res) => {
  try {
    const result = await getUsers.getSoftwareStudents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.getSportStudents = async (req, res) => {
  try {
    const result = await getUsers.getSportStudents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};
  