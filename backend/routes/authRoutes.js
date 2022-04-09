const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');
const { verifyUserRoles } = require('../middleware/roleMiddleware');
const ROLES = require('../utils/roles');

const router = express.Router();

// Mount Routes
router
  .route('/register')
  .post(verifyToken, verifyUserRoles(ROLES.admin), registerUser);
router.route('/login').post(loginUser);

module.exports = router;
