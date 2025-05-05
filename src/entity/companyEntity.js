// const { EntitySchema } = require('typeorm');

// const Company = new EntitySchema({
//   name: 'Company',
//   tableName: 'company_details',
//   columns: {
//     id: { 
//       primary: true, 
//       type: 'int', 
//       generated: true 
//     },
//     companyType: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     organizationtype: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     companyregisternumber: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     bussinessLegalname: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     email: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     phoneno: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     url: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     postcode: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     address_line_1: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     address_line_2: { 
//       type: 'varchar', 
//       nullable: true 
//     },
//     town: { 
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

// module.exports = { Company };




const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    organizationtype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    companyregisternumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bussinessLegalname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_line_1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_line_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    town: {
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
    tableName: 'company_details',
    timestamps: false
  });

  return Company;
};
