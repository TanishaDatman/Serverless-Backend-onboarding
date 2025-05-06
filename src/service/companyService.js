const { createSequelizeInstance } = require('../db/dbconn'); 
const sequelize = createSequelizeInstance();                 
const Company = require('../entity/companyEntity')(sequelize);

// Create Company Details
exports.createCompanyDetails = async (data) => {
  const newCompanyDetails = await Company.create({
    companyType: data.companyType,
    organizationtype: data.organizationtype,
    companyregisternumber: data.companyregisternumber,
    bussinessLegalname: data.bussinessLegalname,
    email: data.email,
    phoneno: data.phoneno,
    url: data.url,
    postcode: data.postcode,
    address_line_1: data.address_line_1,
    address_line_2: data.address_line_2,
    town: data.town,
    county: data.county,
    country: data.country,
    document: {
      name: data.documentName,  // Ensure 'name' exists in incoming data
      type: data.documentType   // Ensure 'type' exists in incoming data
    },
    flag: data.flag,
  });

  return newCompanyDetails;
};

// Get Company Details by ID
exports.getCompanyDetails = async (id) => {
  const companyDetails = await Company.findByPk(id);  // Use Sequelize's findByPk
  return companyDetails;
};
