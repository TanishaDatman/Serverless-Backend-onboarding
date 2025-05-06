require('dotenv').config({ path: '../../.env' }); // adjust path as needed

const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

let sequelize;

// Create a new Sequelize instance
const createSequelizeInstance = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME || 'onboardingagain',
      process.env.DB_USERNAME || 'root',
      process.env.DB_PASSWORD || 'Tanisha@2412',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: false,
      }
    );
  }
  return sequelize;
};

// Ensure database exists before connecting
const initDatabase = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'Tanisha@2412',
  });

  try {
    console.log('Checking if database exists...');
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(`Database '${process.env.DB_NAME}' ensured.`);
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    await connection.end();
  }
};

// Initialize Sequelize and sync models
const initializeSequelize = async () => {
  const sequelize = createSequelizeInstance();

  try {
    await sequelize.authenticate();
    console.log('Connection established.');

    // Import and define models
    const Business = require('../entity/businessEntity')(sequelize);
    const Bank = require('../entity/bankEntity')(sequelize);
    const Trading = require('../entity/tradingEntity')(sequelize);
    const Company = require('../entity/companyEntity')(sequelize);


    await sequelize.sync({ alter: true }); // or { force: true } for full reset in dev
    console.log('Models synchronized.');
  } catch (error) {
    console.error('Sequelize init failed:', error);
    throw error;
  }
};

module.exports = {
  initDatabase,
  initializeSequelize,
  createSequelizeInstance,
};
