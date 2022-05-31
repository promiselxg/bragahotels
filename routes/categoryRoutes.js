const express = require('express');
const {
  getAllCategory,
  newCategory,
  deleteCategory,
  updateCategory,
  singleCategory,
} = require('../controllers/categoryController');
const router = express.Router();

router.route('/').get(getAllCategory).post(newCategory);
router
  .route('/:id')
  .delete(deleteCategory)
  .put(updateCategory)
  .get(singleCategory);

module.exports = router;
