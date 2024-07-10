const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, courseController.createCourse);
router.get('/', authMiddleware.verifyToken, courseController.getCourses);

module.exports = router;
