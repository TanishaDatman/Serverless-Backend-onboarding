// const { EntitySchema } = require('typeorm');

// const Trading = new EntitySchema({
//   name: 'Trading',
//   tableName: 'trading_details',
//   columns: {
//     id: { 
//       primary: true, 
//       type: 'int', 
//       generated: true 
//     },
//     tradingName: { 
//       type: 'varchar', 
//       nullable: false 
//     },
//     postCode: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     addressLine1: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     addressLine2: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     townCity: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     county: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     country: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     isSameAsRegistered: { 
//       type: 'boolean', 
//       default: true 
//     },
//     flag: { 
//       type: 'int', 
//       nullable: true, 
//       default: 0 
//     },
//     createdAt: { 
//       type: 'timestamp', 
//       default: () => 'CURRENT_TIMESTAMP' 
//     },
//     updatedAt: { 
//       type: 'timestamp', 
//       default: () => 'CURRENT_TIMESTAMP' 
//     },
//   },
// });

// module.exports = { Trading };



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
