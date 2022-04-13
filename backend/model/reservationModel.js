module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('reservation', {
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    totalDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('booked', 'paid', 'cancelled'),
      defaultValue: 'booked',
    },
  });

  return Reservation;
};
