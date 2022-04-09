const asyncHandler = require('express-async-handler');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const ROLES = require('../utils/roles');
const db = require('../config/db');

//@desc     Register User
//@route    GET /api/v1/auth
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  try {
    //  get incoming values
    const {
      first_name,
      last_name,
      phone_number,
      email,
      username,
      password,
      confirm_password,
    } = req.body;

    //  check if required fields are empty
    if (
      !first_name ||
      !phone_number ||
      !email ||
      !username ||
      !password ||
      !confirm_password
    ) {
      res.status(400);
      throw new Error('Please fill out the required fields.');
    }
    //  check if passwords match
    if (password !== confirm_password) {
      res.status(403);
      throw new Error('Password Mismatch.');
    }
    //  check if username or email address already exist
    const checkUserExist = await db.users.findOne({
      where: {
        [Op.or]: [
          { username: username },
          { email: email },
          { phoneNumber: phone_number },
        ],
      },
    });
    if (checkUserExist) {
      res.status(400);
      throw new Error(
        'Username or Email Address or Phone Number is already in use.'
      );
    }
    //  hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await db.users.create({
      username,
      password: hashedPassword,
      phoneNumber: phone_number,
      email,
      userRole: `${ROLES.user}, ${ROLES.admin}`,
      lastname: last_name,
      firstname: first_name,
    });
    if (user) {
      generateCookieResponse(200, res, user.userid, user.userRole);
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//@desc     Login User
//@route    POST /api/v1/auth
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  //  check user credentials
  if (!username || !password) {
    res.status(400);
    throw new Error('Please enter your username or password');
  }
  const user = await db.users.findOne({ where: { username } });
  if (user && (await bcrypt.compare(password, user.password))) {
    generateCookieResponse(200, res, user.userid, user.userRole);
  } else {
    res.status(400);
    throw new Error('Incorrect username or password.');
  }
});

//  Get token from Model and create cookie
const generateCookieResponse = (statusCode, res, userId, userRole) => {
  const token = generateToken(userId, userRole);
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
  });
};

//  Generate JWT
const generateToken = (id, role) => {
  return JWT.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {
  registerUser,
  loginUser,
};
