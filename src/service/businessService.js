const { initDatabase, createAppDataSource, initializeDataSource } = require('../db/dbconn');
const { Business } = require('../entity/businessEntity');

// Create Business
const createBusiness = async (data) => {
  // Destructure the required fields from the input data
  const { title, first_name, last_name, dob, nationality, emailId, phnno, postcode, houseno, street, town_city, county, country, flag } = data;

  // Ensure the database exists first
  console.log('Initializing database...');
  await initDatabase();  // Create database if not exists

  // Initialize DataSource
  console.log('Initializing TypeORM data source...');
  await initializeDataSource();  // Ensure the data source is properly initialized

  const AppDataSource = createAppDataSource();
  const businessRepo = AppDataSource.getRepository(Business);

  try {
    console.log('Creating new business...');
    const newBusiness = businessRepo.create({
      title,
      first_name,
      last_name,
      dob,
      nationality,
      emailId,
      phnno,
      postcode,
      houseno,
      street,
      town_city,
      county,
      country,
      flag
    });
    await businessRepo.save(newBusiness);

    return newBusiness;
  } catch (error) {
    console.error('Error creating business:', error);
    throw new Error('Error creating business');
  }
};

// Get Business by ID
const getBusiness = async (id) => {
    // Step 1: Ensure DB exists
    console.log('Initializing database...');
    await initDatabase();
  
    // Step 2: Initialize the data source
    console.log('Initializing TypeORM data source...');
    await initializeDataSource();
  
    // Step 3: Now safely create AppDataSource
    const AppDataSource = createAppDataSource();
    const businessRepo = AppDataSource.getRepository(Business);
  
    try {
      console.log(`Fetching business with ID: ${id}`);
      const business = await businessRepo.findOneBy({ id });
      console.log("business======>", business);
      return business;
    } catch (error) {
      console.error('Error fetching business:', error);
      throw new Error('Error fetching business');
    }
  };
  module.exports = { createBusiness, getBusiness };
