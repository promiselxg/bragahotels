const express = require('express');
const { registerUser } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Mount Routes
router.route('/').get(registerUser);

module.exports = router;
