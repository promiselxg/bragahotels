const express = require('express');
const db = require('../config/db');
const {
  addRoom,
  getRooms,
  getSingleRoom,
  deleteRoom,
  updateRoom,
  bookRoom,
} = require('../controllers/roomController');
const { verifyToken } = require('../middleware/authMiddleware');
const { queryFilter } = require('../middleware/queryMiddleware');
const { uploadFile } = require('../middleware/uploadMiddleware');

const router = express.Router();

// Mount Routes
router.route('/new').post(verifyToken, uploadFile.array('file'), addRoom);
router.route('/').get(queryFilter(db.rooms), getRooms);
router.route('/:id/:checkin/:checkout/book/').post(bookRoom);
router
  .route('/:id')
  .get(getSingleRoom)
  .delete(verifyToken, deleteRoom)
  .put(verifyToken, updateRoom);
module.exports = router;
