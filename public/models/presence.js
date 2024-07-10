module.exports = (sequelize, DataTypes) => {
    const Presence = sequelize.define('Presence', {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      justification: {
        type: DataTypes.STRING,
      },
    });
  
    return Presence;
  };
  