const { Bank } = require("../entity/bankEntity");
const { createAppDataSource } = require("../db/dbconn");

// Create Bank Details
exports.createBankDetails = async (data) => {
  const AppDataSource = createAppDataSource();
  const bankDetailsRepo = AppDataSource.getRepository(Bank);

  const bankDetails = bankDetailsRepo.create({
    accountHolderName: data.accountHolderName,
    sortCode: data.sortCode,
    accountNumber: data.accountNumber,
    confirmAccountNumber: data.confirmAccountNumber,
    document: {
      name: data.documentName,  // Make sure 'name' exists in the incoming data
      type: data.documentType   // Make sure 'type' exists in the incoming data
    },
    flag: data.flag,
  });

  await bankDetailsRepo.save(bankDetails);

  return bankDetails;
};

// Get Bank Details by ID
exports.getBankDetails = async (id) => {
  const AppDataSource = createAppDataSource();
  const bankDetailsRepo = AppDataSource.getRepository(Bank);

  const bankDetails = await bankDetailsRepo.findOneBy({ id });

  return bankDetails;
};
