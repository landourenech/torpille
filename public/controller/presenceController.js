const db = require('../models');

exports.markPresence = async (req, res) => {
  try {
    const { date, status, justification, userId, courseId } = req.body;
    const presence = await db.Presence.create({ date, status, justification, UserId: userId, CourseId: courseId });
    res.status(201).send(presence);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPresences = async (req, res) => {
  try {
    const presences = await db.Presence.findAll();
    res.status(200).send(presences);
  } catch (error) {
    res.status(500).send(error);
  }
};