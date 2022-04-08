const asyncHandler = require('express-async-handler');
const db = require('../config/db');

//@desc     Register User
//@route    GET /api/auth
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const newUser = await db.users.create({
    title: req.body.name,
  });
  res.status(200).json({
    status: true,
    message: newUser,
  });
});

module.exports = {
  registerUser,
};
