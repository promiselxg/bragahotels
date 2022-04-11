const express = require('express');
const db = require('../config/db');
const {
  addRoom,
  getRooms,
  getSingleRoom,
} = require('../controllers/roomController');
const { verifyToken } = require('../middleware/authMiddleware');
const { queryFilter } = require('../middleware/queryMiddleware');
const { uploadFile } = require('../middleware/uploadMiddleware');

const router = express.Router();

// Mount Routes
router.route('/new').post(verifyToken, uploadFile.array('file'), addRoom);
router.route('/').get(queryFilter(db.rooms), getRooms);
router.route('/:id').get(getSingleRoom);
module.exports = router;
