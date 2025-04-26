const { initDatabase, createAppDataSource, initializeDataSource } = require('../db/dbconn');
const { Bank } = require('../entity/bankEntity');

// Create Bank Details
const createBankDetails = async (data) => {
  const { accountHolderName, sortCode, accountNumber, confirmAccountNumber, flag } = data;

  console.log('Initializing database...');
  await initDatabase();

  console.log('Initializing TypeORM data source...');
  await initializeDataSource();

  const AppDataSource = createAppDataSource();
  const bankDetailsRepo = AppDataSource.getRepository(Bank);

  try {
    console.log('Creating new bank details...');
    const newBankDetails = bankDetailsRepo.create({
      accountHolderName,
      sortCode,
      accountNumber,
      confirmAccountNumber,
      flag,
    });

    await bankDetailsRepo.save(newBankDetails);

    return newBankDetails;
  } catch (error) {
    console.error('Error creating bank details:', error);
    throw new Error('Error creating bank details');
  }
};

// Get Bank Details by ID
const getBankDetails = async (id) => {
  console.log('Initializing database...');
  await initDatabase();

  console.log('Initializing TypeORM data source...');
  await initializeDataSource();

  const AppDataSource = createAppDataSource();
  const bankDetailsRepo = AppDataSource.getRepository(Bank);

  try {
    console.log(`Fetching bank details with ID: ${id}`);
    const bankDetails = await bankDetailsRepo.findOneBy({ id });
    console.log('bankDetails=====>', bankDetails);
    return bankDetails;
  } catch (error) {
    console.error('Error fetching bank details:', error);
    throw new Error('Error fetching bank details');
  }
};

module.exports = { createBankDetails, getBankDetails };
