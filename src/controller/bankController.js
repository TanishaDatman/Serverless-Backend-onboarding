const bankService = require('../service/bankService');  
const { bankSchema } = require('../Joi/validateBank');  
const { validateAndRespond } = require('../helper/validate'); 

// Create Bank Details
exports.createBankDetails = async (event) => {
  try {
    // Parse request body
    const body = JSON.parse(event.body);

    // Validate incoming request data using Joi schema
    const validationResponse = validateAndRespond(bankSchema, body);
    if (validationResponse) return validationResponse;  // If validation fails, return the error response

    // Call bankService to create bank details
    const newBankDetails = await bankService.createBankDetails({
      accountHolderName: body.accountHolderName,
      sortCode: body.sortCode,
      accountNumber: body.accountNumber,
      confirmAccountNumber: body.confirmAccountNumber,
      documentName: body.documentName, 
      documentType: body.documentType,
      flag: body.flag,
    });

    // Return success response
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Bank details created successfully",
        bankDetails: newBankDetails,
      }),
    };
  } catch (error) {
    // Log error and return error response
    console.error("Create Bank Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create bank details" }),
    };
  }
};

// Get Bank Details by ID
exports.getBankDetails = async (event) => {
  try {
    // Get ID from the URL path
    const { id } = event.pathParameters;

    // Call bankService to get bank details by ID
    const bankDetails = await bankService.getBankDetails(id);

    if (!bankDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Bank details not found" }),
      };
    }

    // Return the bank details
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Bank details fetched successfully",
        bankDetails,
      }),
    };
  } catch (error) {
    // Log error and return error response
    console.error("Get Bank Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch bank details" }),
    };
  }
};
