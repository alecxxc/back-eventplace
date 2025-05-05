const studentService = require('../../services/student/student.service');

exports.getData = async (req, res) => {
  try {
    const result = await studentService.getData(req.user);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateName = async (req, res) => {
  try {  
    const result = await studentService.updateName(req.user, req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success:false, message: error.message });
  }
};


exports.subscription = async (req, res) => {
  try {
    const result = await studentService.subscription(req.user.id, req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.showSubscriptions = async (req, res) => {
  try {
    const result = await studentService.showSubscriptions(req.user);
    res.json({ success: true, data: result});
  }  catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.cancelSubcription = async (req, res) => {
  try {
    const result = await studentService.cancelSubcription(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}


exports.availableEvents = async (req, res) => {
  try {
    const result = await studentService.availableEvents();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(404).json({ success: false,  message: error.message });
  }
};

exports.comment = async (req, res) => {
  try {
    const result = await studentService.comment(req.body, req.user);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.showComments = async (req, res) => {
  try {
    const result = await studentService.showComments(req.user);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.editComment = async (req, res) => {
  try {
    const result = await studentService.editComment(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const result = await studentService.deleteComment(req.body);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};