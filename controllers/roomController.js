//  Get all Rooms
const getAllRooms = (req, res) => {
  res.status(200).json({ message: 'Get all Rooms', rooms });
};

module.exports = {
  getAllRooms,
};
