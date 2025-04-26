const { initDatabase, createAppDataSource, initializeDataSource } = require('../db/dbconn');
const { Trading } = require('../entity/tradingEntity');

// Create Trading Details
const createTradingDetails = async (data) => {
  const { 
    tradingName, postCode, addressLine1, addressLine2, townCity, county, country,
    isSameAsRegistered, flag 
  } = data;

  console.log('Initializing database...');
  await initDatabase();
  console.log('Initializing TypeORM data source...');
  await initializeDataSource();

  const AppDataSource = createAppDataSource();
  const tradingDetailsRepo = AppDataSource.getRepository(Trading);

  try {
    console.log('Creating new trading details...');
    const newTradingDetails = tradingDetailsRepo.create({
      tradingName, postCode, addressLine1, addressLine2, townCity, county, country,
      isSameAsRegistered, flag
    });

    await tradingDetailsRepo.save(newTradingDetails);

    return newTradingDetails;
  } catch (error) {
    console.error('Error creating trading details:', error);
    throw new Error('Error creating trading details');
  }
};

// Get Trading Details by ID
const getTradingDetails = async (id) => {
  console.log('Initializing database...');
  await initDatabase();
  console.log('Initializing TypeORM data source...');
  await initializeDataSource();

  const AppDataSource = createAppDataSource();
  const tradingDetailsRepo = AppDataSource.getRepository(Trading);

  try {
    console.log(`Fetching trading details with ID: ${id}`);
    const tradingDetails = await tradingDetailsRepo.findOneBy({ id });
    console.log('tradingDetails=====>', tradingDetails);
    return tradingDetails;
  } catch (error) {
    console.error('Error fetching trading details:', error);
    throw new Error('Error fetching trading details');
  }
};

module.exports = { createTradingDetails, getTradingDetails };
