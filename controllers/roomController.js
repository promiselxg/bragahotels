const asyncHandler = require('express-async-handler');
const Room = require('../models/roomModel');
//  Create new Room
const createRoom = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Create new Room' });
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
  res.status(200).json({ message: 'get single room' });
});
//  Get all Rooms
const getAllRooms = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all Rooms' });
});

module.exports = {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getSingleRoom,
};
