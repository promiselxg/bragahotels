const express = require('express');
const { addRoom } = require('../controllers/roomController');
const { verifyToken } = require('../middleware/authMiddleware');
const { uploadFile } = require('../middleware/uploadMiddleware');

const router = express.Router();

// Mount Routes
router.route('/new').post(verifyToken, uploadFile.array('file'), addRoom);

module.exports = router;
