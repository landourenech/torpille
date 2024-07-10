const db = require('../models');

exports.createCourse = async (req, res) => {
  try {
    const { name, description, userId } = req.body;
    const course = await db.Course.create({ name, description, UserId: userId });
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await db.Course.findAll();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
};
