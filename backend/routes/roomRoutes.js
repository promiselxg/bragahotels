const express = require('express');
const {
  addRoom,
  getRooms,
  getSingleRoom,
} = require('../controllers/roomController');
const { verifyToken } = require('../middleware/authMiddleware');
const { uploadFile } = require('../middleware/uploadMiddleware');

const router = express.Router();

// Mount Routes
router.route('/new').post(verifyToken, uploadFile.array('file'), addRoom);
router.route('/').get(getRooms);
router.route('/:id').get(getSingleRoom);
module.exports = router;
