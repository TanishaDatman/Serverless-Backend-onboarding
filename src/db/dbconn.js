// require('dotenv').config({ path: '../../.env' });  // Ensure .env path is correct

// const mysql = require('mysql2/promise');
// const { DataSource } = require('typeorm');
// const { Business } = require('../entity/businessEntity'); // Adjust paths if necessary
// const {Bank}=require('../entity/bankEntity')
// const {Trading}=require('../entity/tradingEntity')
// const {Company}=require('../entity/companyEntity')

// let AppDataSource;

// const createAppDataSource = () => {
//   if (!AppDataSource) {
//     AppDataSource = new DataSource({
//       type: 'mysql',
//       host: process.env.DB_HOST || 'localhost',
//       port: parseInt(process.env.DB_PORT) || 3306,
//       username: process.env.DB_USERNAME || 'root',
//       password: process.env.DB_PASSWORD || 'Tanisha@2412',
//       database: process.env.DB_NAME || 'onboardingagain',
//       synchronize: true,
//       logging: false,
//       entities: [Business,Bank,Company,Trading,]
//     });
//   }

//   return AppDataSource;
// };

// // Initialize the database if not exists
// const initDatabase = async () => {
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USERNAME || 'root',
//     password: process.env.DB_PASSWORD || 'Tanisha@2412',
//   });

//   try {
//     console.log(`Checking if database exists...`);
//     // Create the database if it doesn't exist
//     await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
//     console.log(`Database '${process.env.DB_NAME}' checked/created successfully.`);
//     await connection.end();
//   } catch (error) {
//     console.error('Error initializing the database:', error);
//     throw new Error('Database initialization failed');
//   }
// };

// // Initialize the AppDataSource
// const initializeDataSource = async () => {
//   const AppDataSource = createAppDataSource();
  
//   // Initialize the connection to the database
//   try {
//     console.log('Initializing data source...');
//     await AppDataSource.initialize();
//     console.log('DataSource initialized successfully');
//   } catch (error) {
//     console.error('Error initializing data source:', error);
//     throw new Error('DataSource initialization failed');
//   }
// };

// module.exports = { createAppDataSource, initDatabase, initializeDataSource };

















require('dotenv').config({ path: '../../.env' }); // Make sure .env path is correct

const mysql = require('mysql2/promise');
const { DataSource } = require('typeorm');
const { Business } = require('../entity/businessEntity');
const { Bank } = require('../entity/bankEntity');
const { Trading } = require('../entity/tradingEntity');
const { Company } = require('../entity/companyEntity');

let AppDataSource; // Keep it global

// Function to create AppDataSource
const createAppDataSource = () => {
  if (!AppDataSource) {
    AppDataSource = new DataSource({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'Tanisha@2412',
      database: process.env.DB_NAME || 'onboardingagain',
      synchronize: true, // Be careful in production with synchronize: true
      logging: false,
      entities: [Business, Bank, Company, Trading],
    });
  }

  return AppDataSource;
};

// Function to initialize database (create if not exists)
const initDatabase = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'Tanisha@2412',
  });

  try {
    console.log(`Checking if database exists...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(`Database '${process.env.DB_NAME}' checked/created successfully.`);
  } catch (error) {
    console.error('Error initializing the database:', error);
    throw new Error('Database initialization failed');
  } finally {
    await connection.end(); // Always close the connection
  }
};

// Function to initialize AppDataSource (without reinitializing)
const initializeDataSource = async () => {
  const dataSource = createAppDataSource();

  try {
    if (!dataSource.isInitialized) { // <<< IMPORTANT FIX
      console.log('Initializing data source...');
      await dataSource.initialize();
      console.log('DataSource initialized successfully.');
    } else {
      console.log('Data source already initialized.');
    }
  } catch (error) {
    console.error('Error initializing data source:', error);
    throw new Error('DataSource initialization failed');
  }
};

module.exports = {
  createAppDataSource,
  initDatabase,
  initializeDataSource,
  AppDataSource, // Exporting this if you need direct access elsewhere
};
