const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Trading = sequelize.define('Trading', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tradingName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addressLine2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    townCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isSameAsRegistered: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    flag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    // createdAt: {
    //   type: DataTypes.TIMESTAMP,
    //   defaultValue: DataTypes.NOW
    // },
    // updatedAt: {
    //   type: DataTypes.TIMESTAMP,
    //   defaultValue: DataTypes.NOW
    // }
  }, {
    tableName: 'trading_details',
    timestamps: false
  });

  return Trading;
};
