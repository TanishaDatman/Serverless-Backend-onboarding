const { Business } = require("../entity/businessEntity");
const { createAppDataSource } = require("../db/dbconn");

// Create Business
exports.createBusiness = async (data) => {
  const AppDataSource = createAppDataSource();
  const businessRepo = AppDataSource.getRepository(Business);

  const business = businessRepo.create({
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
    flag: data.flag,
  });

  await businessRepo.save(business);

  return business;
};

// Get Business by ID
exports.getBusiness = async (id) => {
  const AppDataSource = createAppDataSource();
  const businessRepo = AppDataSource.getRepository(Business);

  const business = await businessRepo.findOneBy({ id });

  return business;
};
