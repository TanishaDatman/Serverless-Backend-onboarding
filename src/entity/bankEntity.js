// const { EntitySchema } = require('typeorm');

// const Bank = new EntitySchema({
//   name: 'Bank',
//   tableName: 'bank_details',
//   columns: {
//     id: { 
//       primary: true, 
//       type: 'int', 
//       generated: true 
//     },
//     accountHolderName: { 
//       type: 'varchar', 
//       nullable: false 
//     },
//     sortCode: { 
//       type: 'varchar', 
//       nullable: false 
//     },
//     accountNumber: { 
//       type: 'varchar', 
//       nullable: false 
//     },
//     confirmAccountNumber: { 
//       type: 'varchar', 
//       nullable: false 
//     },
//     document: { 
//       type: 'json', 
//       nullable: true, 
//     },
//     flag: { 
//       type: 'int', 
//       nullable: true, 
//       default: 0 
//     },
//   },
// });

// module.exports = { Bank};



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
