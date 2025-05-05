// const { Trading } = require("../entity/tradingEntity");
// const { createAppDataSource } = require("../db/dbconn");

// // Create Trading Details
// exports.createTradingDetails = async (data) => {
//   const AppDataSource = createAppDataSource();
//   const tradingDetailsRepo = AppDataSource.getRepository(Trading);

//   const newTradingDetails = tradingDetailsRepo.create({
//     tradingName: data.tradingName,
//     postCode: data.postCode,
//     addressLine1: data.addressLine1,
//     addressLine2: data.addressLine2,
//     townCity: data.townCity,
//     county: data.county,
//     country: data.country,
//     isSameAsRegistered: data.isSameAsRegistered,
//     flag: data.flag,
//   });

//   await tradingDetailsRepo.save(newTradingDetails);

//   return newTradingDetails;
// };

// // Get Trading Details by ID
// exports.getTradingDetails = async (id) => {
//   const AppDataSource = createAppDataSource();
//   const tradingDetailsRepo = AppDataSource.getRepository(Trading);

//   const tradingDetails = await tradingDetailsRepo.findOneBy({ id });

//   return tradingDetails;
// };


const { createSequelizeInstance } = require('../db/dbconn'); 
const sequelize = createSequelizeInstance();                 
const Trading = require('../entity/tradingEntity')(sequelize);

// Create Trading Details
exports.createTradingDetails = async (data) => {
  const newTradingDetails = await Trading.create({
    tradingName: data.tradingName,
    postCode: data.postCode,
    addressLine1: data.addressLine1,
    addressLine2: data.addressLine2,
    townCity: data.townCity,
    county: data.county,
    country: data.country,
    isSameAsRegistered: data.isSameAsRegistered,
    flag: data.flag,
  });

  return newTradingDetails;
};

// Get Trading Details by ID
exports.getTradingDetails = async (id) => {
  const tradingDetails = await Trading.findByPk(id);  // Use Sequelize's findByPk
  return tradingDetails;
};
