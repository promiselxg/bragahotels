module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
