const userService = require('../../services/user/user.services');

exports.register = async (req, res) => {
  try {
    const result = await userService.registerUser(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await userService.loginUser(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.recommendedEvent = async (req, res) => {
  try {
    const result = await userService.recommendedEvent();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.eventsForYear = async (req, res) => {
  try {
    const result = await userService.eventsForYear();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};