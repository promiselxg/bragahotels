const express = require('express');
const {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
} = require('../controllers/roomController');
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
router
  .route('/:roomid')
  .put(
    verifyToken,
    verifyUserRoles(ROLES.admin),
    uploadFile.array('files', 10),
    updateRoom
  )
  .delete(verifyToken, verifyUserRoles(ROLES.admin), deleteRoom)
  .get(verifyToken, verifyUserRoles(ROLES.user, ROLES.admin), getSingleRoom);

module.exports = router;
