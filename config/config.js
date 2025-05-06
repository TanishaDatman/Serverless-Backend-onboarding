module.exports = {
  development: {
    username:  process.env.DB_USERNAME || "root",
    password:  process.env.DB_PASSWORD || 'Tanisha@2412' ,
    database: process.env.DB_NAME || "onboardingagain",
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
};
