const asyncHandler = require('express-async-handler');
//  get All Category
const getAllCategory = (req, res) => {
  res.status(200).json({ message: 'get all category' });
};

//  Create new Category
const newCategory = asyncHandler(async (req, res) => {
  throw new Error('Error occured');
});
//  Update Category
const updateCategory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update category ${req.params.id}` });
});
//  Delete Category
const deleteCategory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete category ${req.params.id}` });
});

//  Get Single Category
const singleCategory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `single category ${req.params.id}` });
});

module.exports = {
  getAllCategory,
  newCategory,
  updateCategory,
  deleteCategory,
  singleCategory,
};
