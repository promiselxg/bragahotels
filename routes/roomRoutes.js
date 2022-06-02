const express = require('express');
const { getAllRooms, createRoom } = require('../controllers/roomController');
const { verifyToken } = require('../middleware/authMiddleware');
const { verifyUserRoles } = require('../middleware/roleMiddleware');
const { uploadFile } = require('../middleware/uploadMiddleware');
const ROLES = require('../utils/roles');
const router = express.Router();

router.route('/').get(getAllRooms);
router
  .route('/new')
  .post(
    verifyToken,
    verifyUserRoles(ROLES.admin),
    uploadFile.array('files', 10),
    createRoom
  );
module.exports = router;
