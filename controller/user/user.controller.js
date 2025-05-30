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

exports.featuredEvents = async (req, res) => {
  try {
    const result = await userService.featuredEvents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.galleryEventsForYear = async (req, res) => {
  try {
    const result = await userService.galleryEventsForYear();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.calendarEvents = async (req, res) => {
  try {
    const result = await userService.calendarEvents(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.upcomingEvents = async (req, res) => {
  try {
    const result = await userService.upcomingEvents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};