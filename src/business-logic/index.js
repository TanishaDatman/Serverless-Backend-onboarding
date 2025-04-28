// src/business-logic/index.js
const { Business } = require('../entity/businessEntity');
const { createAppDataSource } = require('../db/dbconn');

// Save Business to DB
const saveBusinessToDB = async (data) => {
  const AppDataSource = createAppDataSource();
  const businessRepo = AppDataSource.getRepository(Business);
  //     await businessRepo.save(newBusiness);


  const newBusiness = businessRepo.create(data);
  await businessRepo.save(newBusiness);

  return newBusiness;
};

// Get Business from DB by ID
const getBusinessFromDB = async (id) => {
  const AppDataSource = createAppDataSource();
  const businessRepo = AppDataSource.getRepository(Business);

  const business = await businessRepo.findOneBy({ id });
  return business;
};

module.exports = { saveBusinessToDB, getBusinessFromDB };
