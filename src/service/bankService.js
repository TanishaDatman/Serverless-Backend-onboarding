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
