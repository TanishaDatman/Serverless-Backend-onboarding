
const { initDatabase, createAppDataSource, initializeDataSource } = require('../db/dbconn');
const { Company } = require('../entity/companyEntity');

// Create Company Details
const createCompanyDetails = async (data) => {
  const { 
    companyType, organizationtype, companyregisternumber, bussinessLegalname,
    email, phoneno, url, postcode, address_line_1, address_line_2,
    town, county, country, flag
  } = data;

  console.log('Initializing database...');
  await initDatabase();
  console.log('Initializing TypeORM data source...');
  await initializeDataSource();

  const AppDataSource = createAppDataSource();
  const companyDetailsRepo = AppDataSource.getRepository(Company);

  try {
    console.log('Creating new company details...');
    const newCompanyDetails = companyDetailsRepo.create({
      companyType, organizationtype, companyregisternumber, bussinessLegalname,
      email, phoneno, url, postcode, address_line_1, address_line_2,
      town, county, country, flag
    });

    await companyDetailsRepo.save(newCompanyDetails);

    return newCompanyDetails;
  } catch (error) {
    console.error('Error creating company details:', error);
    throw new Error('Error creating company details');
  }
};

// Get Company Details by ID
const getCompanyDetails = async (id) => {
  console.log('Initializing database...');
  await initDatabase();
  console.log('Initializing TypeORM data source...');
  await initializeDataSource();

  const AppDataSource = createAppDataSource();
  const companyDetailsRepo = AppDataSource.getRepository(Company);

  try {
    console.log(`Fetching company details with ID: ${id}`);
    const companyDetails = await companyDetailsRepo.findOneBy({ id });
    console.log('companyDetails=====>', companyDetails);
    return companyDetails;
  } catch (error) {
    console.error('Error fetching company details:', error);
    throw new Error('Error fetching company details');
  }
};

module.exports = { createCompanyDetails, getCompanyDetails };
