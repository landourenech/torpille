module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      class: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
    });
  
    return User;
  };
  