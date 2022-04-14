const asyncHandler = require('express-async-handler');
const { cloudinary } = require('../utils/cloudinary');
const { Op } = require('sequelize');
const ROLES = require('../utils/roles');
const moment = require('moment');
const db = require('../config/db');
const fs = require('fs');

//@desc     Register Room
//@route    POST /api/v1/rooms/new
//@access   Public
const addRoom = asyncHandler(async (req, res) => {
  const files = req.files;
  const urls = [];
  try {
    if (files.length > 0 && req.body.title !== '') {
      const {
        title,
        description,
        category,
        qty,
        price,
        bed_size,
        room_features,
        ac,
        allow_children,
        adult,
        kids,
        cancellation,
      } = req.body;
      //    check if required fields are empty
      if (!title || !description || !category || !qty || !price) {
        res.status(400);
        throw new Error('Please fill out the required fields');
      }

      //    check db to see if record exist
      const roomExist = await db.rooms.findOne({
        where: {
          [Op.and]: [{ title: title }, { category: category }],
        },
      });
      if (roomExist) {
        res.status(400);
        throw new Error(`${title} already exist in ${category} category`);
      }
      //    check if image is > 1MB
      for (const file of files) {
        const { path } = file;
        if (file.size > process.env.IMAGE_MAX_SIZE) {
          res.status(400);
          throw new Error('Selected Images Must be less than 5MB.');
        }
        //  upload image to cloudinary
        const newPath = await cloudinaryImageUploadMethod(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      //create new Room
      const room = await db.rooms.create({
        title,
        description,
        category,
        thumbnail: urls[0].img.secure_url,
        otherImg: urls.map((url) => url.img.secure_url),
        imageId: urls.map((url) => url.img.public_id.split('/')[1]),
        qty,
        price,
        bedSize: bed_size,
        roomFeatures: room_features,
        ac: ac ? ac : false,
        allowChildren: allow_children ? allow_children : false,
        adult,
        kids,
        cancellation: cancellation ? cancellation : 'no cancellation',
      });
      if (room) {
        res.status(201).json({
          status: true,
          message: 'New room successfully added to the inventory.',
        });
      }
    } else {
      res.status(400);
      throw new Error('Invalid Request');
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//@desc     Get All Rooms
//@route    GET /api/v1/rooms
//@access   Public
const getRooms = asyncHandler(async (req, res) => {
  res.status(200).json(res.queryResults);
});

//@desc     Get Single Room
//@route    GET /api/v1/rooms/:id
//@access   Public
const getSingleRoom = asyncHandler(async (req, res) => {
  //  get id
  const { id } = req.params;
  //  ccheck if it si empty
  if (id === '') {
    res.status(400).json({
      status: false,
      message: 'Invalid Request',
    });
  }
  try {
    const room = await db.rooms.findOne({ where: { roomid: id } });
    if (room) {
      res.status(200).json({
        status: true,
        data: room,
      });
    } else {
      res.status(404).json({
        status: false,
        message: 'Requested room was not found.',
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//@desc     Delete Single Room
//@route    DELETE /api/v1/rooms/:id
//@access   Private
const deleteRoom = asyncHandler(async (req, res) => {
  //  check if request has id
  if (!req.params.id) {
    res.status(400).json({
      status: false,
      message: 'Invalid request.',
    });
  }
  try {
    const response = await db.rooms.destroy({
      where: { roomid: req.params.id },
    });
    if (response) {
      res.status(200).json({
        status: true,
        message: 'Room successfully deleted.',
      });
    } else {
      res.status(400);
      throw new Error('Invalid room id.');
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//@desc     Update Single Room
//@route    PUT /api/v1/rooms/:id
//@access   Private
const updateRoom = asyncHandler(async (req, res) => {
  // get room id
  if (!req.params.id) {
    res.status(400).json({
      status: false,
      message: 'Invalid request.',
    });
  }
  try {
    //  check if room id exist
    const roomExist = await db.rooms.findOne({
      where: { roomid: req.params.id },
    });
    if (!roomExist) {
      res.status(400);
      throw new Error('The requested room does not exist.');
    }
    if (Object.keys(req.body).length === 0) {
      res.status(400);
      throw new Error('Invalid request.');
    }
    //  update record
    const response = await db.rooms.update(req.body, {
      where: { roomid: req.params.id },
    });
    if (response) {
      res.status(200).json({
        status: true,
        data: 'Room information updated successfully.',
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Error updating room's record.",
      });
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//@desc     Book A Room
//@route    POST /api/v1/rooms/:id/book
//@access   Public
const bookRoom = asyncHandler(async (req, res) => {
  //  get id
  const { id } = req.params;
  let transaction = true;
  const data = {
    userType: req.user ? 'user' : 'guest',
    first_name: req.user ? req.user.firstname : req.body.first_name,
    last_name: req.user ? req.user.lastname : req.body.last_name,
    phone_number: req.user ? req.user.phoneNumber : req.body.phone_number,
    email: req.user ? req.user.email : req.body.email,
    special_request: req.body.special_request,
    checkin: req.body.checkIn,
    checkout: req.body.checkOut,
    totalDays: req.body.totalDays,
    totalAmount: req.body.totalAmount,
  };

  const {
    userType,
    first_name,
    last_name,
    phone_number,
    email,
    special_request,
    checkin,
    checkout,
    totalDays,
    totalAmount,
  } = data;

  try {
    if (!id) {
      res.status(400).json({
        status: false,
        message: 'Invalid request.',
      });
    }
    if (!checkin || !checkout || !totalAmount || !totalDays) {
      res.status(400);
      throw new Error('Invalid request.');
    }
    //   if user is a guest, check if the form is filled out
    if (userType === 'guest') {
      if (!first_name || !last_name || !phone_number || !email || !userType) {
        console.log(req.user);
      }
      if (!parseInt(phone_number)) {
        res.status(400);
        throw new Error('Please enter a valid phone number.');
      }
    }
    //  check DB to see if ID exist
    const roomExist = await db.rooms.findOne({ where: { roomid: id } });
    if (!roomExist) {
      res.status(400);
      throw new Error('Invalid request ID.');
    }
    //  check if room is available for booking
    if (roomExist?.qty < 1) {
      res.status(400);
      throw new Error('This room is no longer available for booking.');
    }
    let newQty;
    newQty = roomExist.qty - 1;

    //  connect payment api
    try {
      if (transaction) {
        // insert record to reservations table
        const response = await db.reservation.create({
          userid: req.user ? req.user.id : 'guest',
          roomid: id,
          checkIn: checkin,
          checkOut: checkout,
          totalAmount: totalAmount,
          totalDays: totalDays,
          status: 'paid',
          firstname: first_name,
          lastname: last_name,
          phoneNumber: phone_number,
          email: email,
          specialRequest: special_request,
        });
        if (response) {
          //  update current rooms availability
          await db.rooms.update({ qty: newQty }, { where: { roomid: id } });
        }
        res.status(201).json({
          status: true,
          message: 'room reservation successfull.',
        });
      }
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//  upload multiple image function
const cloudinaryImageUploadMethod = asyncHandler(async (file) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      { upload_preset: 'rooms' },
      (err, result) => {
        if (err) {
          throw new Error(err);
        }
        resolve({
          img: result,
        });
      }
    );
  });
});

module.exports = {
  addRoom,
  getRooms,
  getSingleRoom,
  deleteRoom,
  updateRoom,
  bookRoom,
};
