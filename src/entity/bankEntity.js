const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Bank = sequelize.define('Bank', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    accountHolderName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sortCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmAccountNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    document: {
      type: DataTypes.JSON,
      allowNull: true
    },
    flag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'bank_details',
    timestamps: false
  });

  return Bank;
};
