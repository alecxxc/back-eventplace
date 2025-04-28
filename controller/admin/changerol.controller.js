const changeRol = require('../../services/admin/changerol.service'); 

exports.changeRol = async (req, res) => {
  try {
    const result = await changeRol.changeRol(req.body);
    res.json({ success: true, data: result, message: 'Rol actualizado' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}