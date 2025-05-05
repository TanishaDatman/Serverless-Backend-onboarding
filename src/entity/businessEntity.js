// const { EntitySchema } = require('typeorm');

// const Business = new EntitySchema({
//   name: 'Business',
//   tableName: 'business_details',
//   columns: {
//     id: { 
//       primary: true, 
//       type: 'integer', 
//       generated: true 
//     },
//     title: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     first_name: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     last_name: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     dob: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     nationality: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     emailId: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     phnno: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     postcode: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     houseno: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     street: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     town_city: { 
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

// module.exports = { Business };




const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Business = sequelize.define('Business', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phnno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    houseno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: true
    },
    town_city: {
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
    tableName: 'business_details',
    timestamps: false
  });

  return Business;
};
