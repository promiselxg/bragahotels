const asyncHandler = require('express-async-handler');
const { cloudinary } = require('../utils/cloudinary');
const { Op } = require('sequelize');
const ROLES = require('../utils/roles');
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
};
