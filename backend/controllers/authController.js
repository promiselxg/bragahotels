const asyncHandler = require('express-async-handler');

//@desc     Register User
//@route    GET /api/auth
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    message: 'register route',
  });
});

module.exports = {
  registerUser,
};
