const asyncHandler = require('express-async-handler');
const { cloudinary } = require('../utils/cloudinary');
const fs = require('fs');
const Room = require('../models/roomModel');
const Category = require('../models/categoryModel');
//  Create new Room
const createRoom = asyncHandler(async (req, res) => {
  const files = req.files;
  const urls = [];
  try {
    if (files.length > 0 && req.body.title !== '') {
      const {
        title,
        price,
        description,
        category,
        bed_size,
        room_features,
        ac,
        adults,
        kids,
        cancellation,
        roomNumbers,
      } = req.body;

      const roomNumber = roomNumbers
        .replace(/(\s*,?\s*)*$/, '')
        .split(',')
        .map((room) => ({ number: room }));

      //    check if required fields are empty
      if (!title || !description || !category || !price || !bed_size) {
        res.status(400);
        throw new Error('Please fill out the required fields');
      }
      //  check if category id exist
      if (!(await Category.findById(category))) {
        res.status(400);
        throw new Error('Category ID does not exist.');
      }
      //    check db to see if record already exist
      const roomExist = await Room.findOne({
        // where: {
        //   [Op.and]: [{ title: title }, { category: category }],
        // },
        $or: [
          {
            title: title,
          },
          {
            category: category,
          },
        ],
      });
      if (roomExist) {
        res.status(400);
        throw new Error(`${title} already exist.`);
      }
      //    check if image is > 5MB
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
      const room = await Room.create({
        title,
        description,
        category,
        imgThumbnail: urls[0].img.secure_url,
        otherImg: urls.map((url) => url.img.secure_url),
        imageId: urls.map((url) => url.img.public_id.split('/')[1]),
        price,
        bedSize: bed_size,
        roomFeatures: room_features,
        ac: ac ? ac : false,
        noAdults: adults ? adults : 1,
        noKids: kids ? kids : 0,
        cancellation,
        roomNumbers: roomNumber,
      });

      if (room) {
        try {
          await Category.findByIdAndUpdate(category, {
            $push: { rooms: room._id },
          });
          return res.status(201).json({
            status: true,
            message: 'New room successfully added to the inventory.',
          });
        } catch (error) {
          res.status(400);
          throw new Error(error);
        }
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
//  Update Room
const updateRoom = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'update a room' });
});
//  Delete Room
const deleteRoom = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'delete single room' });
});
//  Get Single Room
const getSingleRoom = asyncHandler(async (req, res) => {
  const { roomid } = req.params.id;
  try {
    const room = await Room.findById({ id: roomid });
    return res.status(200).json({
      status: 'success',
      data: room,
    });
  } catch (err) {
    next(err);
  }
});
//  Get all Rooms
const getAllRooms = asyncHandler(async (req, res) => {
  try {
    const rooms = await Room.find().sort({ _id: -1 }).select('-__v');
    return res.status(200).json({
      status: 'success',
      count: rooms.length,
      data: rooms,
    });
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
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
};
