const asyncHandler = require('express-async-handler');

const roomReservation = asyncHandler(async (req, res) => {
  res.status(200).json({
    data: req.body,
  });
});
module.exports = {
  roomReservation,
};
