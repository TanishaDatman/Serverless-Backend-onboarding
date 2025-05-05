// const { Bank } = require("../entity/bankEntity");
// const { createAppDataSource } = require("../db/dbconn");

// // Create Bank Details
// exports.createBankDetails = async (data) => {
//   const AppDataSource = createAppDataSource();
//   const bankDetailsRepo = AppDataSource.getRepository(Bank);

//   const bankDetails = bankDetailsRepo.create({
//     accountHolderName: data.accountHolderName,
//     sortCode: data.sortCode,
//     accountNumber: data.accountNumber,
//     confirmAccountNumber: data.confirmAccountNumber,
//     document: {
//       name: data.documentName,  // Make sure 'name' exists in the incoming data
//       type: data.documentType   // Make sure 'type' exists in the incoming data
//     },
//     flag: data.flag,
//   });

//   await bankDetailsRepo.save(bankDetails);

//   return bankDetails;
// };

// // Get Bank Details by ID
// exports.getBankDetails = async (id) => {
//   const AppDataSource = createAppDataSource();
//   const bankDetailsRepo = AppDataSource.getRepository(Bank);

//   const bankDetails = await bankDetailsRepo.findOneBy({ id });

//   return bankDetails;
// };











const { createSequelizeInstance } = require('../db/dbconn'); 
const sequelize = createSequelizeInstance();                 
const Bank = require('../entity/bankEntity')(sequelize);


exports.createBankDetails = async (data) => {
  try {
    // Creating bank details using Sequelize
    const bankDetails = await Bank.create({
      accountHolderName: data.accountHolderName,
      sortCode: data.sortCode,
      accountNumber: data.accountNumber,
      confirmAccountNumber: data.confirmAccountNumber,
      document: {
        name: data.documentName,  // Ensure 'name' exists in incoming data
        type: data.documentType   // Ensure 'type' exists in incoming data
      },
      flag: data.flag,
    });

    return bankDetails; // Return the created bank details
  } catch (error) {
    console.error("Error in creating bank details:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};

// Get Bank Details by ID
exports.getBankDetails = async (id) => {
  try {
    const bankDetails = await Bank.findByPk(id); // Use Sequelize's findByPk method
    return bankDetails;
  } catch (error) {
    console.error("Error fetching bank details by ID:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};
