const { createSequelizeInstance } = require('../db/dbconn'); 
const sequelize = createSequelizeInstance();                 
const Business = require('../entity/businessEntity')(sequelize);

// Create Business
exports.createBusiness = async (data) => {
  console.log("Inside business service");

  const business = await Business.create({
    title: data.title,
    first_name: data.first_name,
    last_name: data.last_name,
    dob: data.dob,
    nationality: data.nationality,
    emailId: data.emailId,
    phnno: data.phnno,
    postcode: data.postcode,
    houseno: data.houseno,
    street: data.street,
    town_city: data.town_city,
    county: data.county,
    country: data.country,
    documentName: data.documentName,
    documentType: data.documentType,
    flag: data.flag,
  });

  return business;
};

// Get Business by ID
exports.getBusiness = async (id) => {
  const business = await Business.findByPk(id); // Sequelize equivalent of findOneBy({ id })
  return business;
};
