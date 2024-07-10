const express = require('express');
const router = express.Router();
const presenceController = require('../controllers/presenceController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.verifyToken, presenceController.markPresence);
router.get('/', authMiddleware.verifyToken, presenceController.getPresences);

module.exports = router;
