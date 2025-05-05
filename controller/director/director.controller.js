const directorService = require('../../services/director/director.service');

exports.getData = async (req, res) => {
  try {
    const result = await directorService.getData(req.user);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

exports.createEvent = async (req, res) => {
  try {
    const result = await directorService.createEvent(req.body, req.user);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false,  message: error.message });
  }
}

exports.checkEvents = async (req, res) => {
  try {
    const result = await directorService.checkEvents(req.user);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
}

exports.updateEvent = async (req, res) => {
  try {
    const result = await directorService.updateEvent(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
}

exports.deleteEvent = async (req, res) => {
  try {
    const result = await directorService.deleteEvent(req.body);
    res.json({ success: true, message: 'Evento eliminado', data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
}

