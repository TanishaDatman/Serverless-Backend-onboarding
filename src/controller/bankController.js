const { initDatabase, initializeDataSource } = require("../db/dbconn");
const bankService = require("../service/bankService");
const {bankSchema}=require('../Joi/validateBank')
const {validateAndRespond}=require('../helper/validate')


// Create Bank Details
exports.createBankDetails = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const validationResponse = validateAndRespond(bankSchema, body);
    if (validationResponse) return validationResponse; // If validation fails, return the response



    // Initialize database connection
    await initDatabase();
    await initializeDataSource();

    const newBankDetails = await bankService.createBankDetails({
      accountHolderName: body.accountHolderName,
      sortCode: body.sortCode,
      accountNumber: body.accountNumber,
      confirmAccountNumber: body.confirmAccountNumber,
      documentName: body.documentName,
      documentType: body.documentType,
      flag: body.flag,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Bank details created successfully",
        bankDetails: newBankDetails,
      }),
    };
  } catch (error) {
    console.error("Create Bank Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create bank details" }),
    };
  }
};

// Get Bank Details
exports.getBankDetails = async (event) => {
  try {
    // Initialize database connection
    await initDatabase();
    await initializeDataSource();

    const { id } = event.pathParameters;  // Assuming you're passing ID in URL like /bank/{id}

    const bankDetails = await bankService.getBankDetails(id);

    if (!bankDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Bank details not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Bank details fetched successfully",
        bankDetails,
      }),
    };
  } catch (error) {
    console.error("Get Bank Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch bank details" }),
    };
  }
};
