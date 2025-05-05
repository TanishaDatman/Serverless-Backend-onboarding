// const { initDatabase, initializeDataSource } = require("../db/dbconn");
// const tradingService = require("../service/tradingService");
// const {tradingSchema}=require('../Joi/validateTrading')
// const {validateAndRespond}=require('../helper/validate')


// // Create Trading Details
// exports.createTradingDetails = async (event) => {
//   try {

//     const body = JSON.parse(event.body);

//     // const validationResponse = validateAndRespond(tradingSchema, body);
//     // if (validationResponse) return validationResponse; // If validation fails, return the response

//     await initDatabase();
//     await initializeDataSource();

//     const newTradingDetails = await tradingService.createTradingDetails({
//       tradingName: body.tradingName,
//       postCode: body.postCode,
//       addressLine1: body.addressLine1,
//       addressLine2: body.addressLine2,
//       townCity: body.townCity,
//       county: body.county,
//       country: body.country,
//       isSameAsRegistered: body.isSameAsRegistered,
//       flag: body.flag,
//     });

//     return {
//       statusCode: 201,
//       body: JSON.stringify({
//         message: "Trading details created successfully",
//         tradingDetails: newTradingDetails,
//       }),
//     };
//   } catch (error) {
//     console.error("Create Trading Details Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to create trading details" }),
//     };
//   }
// };

// // Get Trading Details
// exports.getTradingDetails = async (event) => {
//   try {
//     await initDatabase();
//     await initializeDataSource();

//     const { id } = event.pathParameters; // Assuming URL like /trading/{id}

//     const tradingDetails = await tradingService.getTradingDetails(id);

//     if (!tradingDetails) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ message: "Trading details not found" }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Trading details fetched successfully",
//         tradingDetails,
//       }),
//     };
//   } catch (error) {
//     console.error("Get Trading Details Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to fetch trading details" }),
//     };
//   }
// };



const tradingService = require("../service/tradingService");
const { tradingSchema } = require('../Joi/validateTrading');
const { validateAndRespond } = require('../helper/validate');

// Create Trading Details
exports.createTradingDetails = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const validationResponse = validateAndRespond(tradingSchema, body);
    if (validationResponse) return validationResponse;

    // Use Sequelize to create trading details
    const newTradingDetails = await tradingService.createTradingDetails({
      tradingName: body.tradingName,
      postCode: body.postCode,
      addressLine1: body.addressLine1,
      addressLine2: body.addressLine2,
      townCity: body.townCity,
      county: body.county,
      country: body.country,
      isSameAsRegistered: body.isSameAsRegistered,
      flag: body.flag,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Trading details created successfully",
        tradingDetails: newTradingDetails,
      }),
    };
  } catch (error) {
    console.error("Create Trading Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create trading details" }),
    };
  }
};

// Get Trading Details
exports.getTradingDetails = async (event) => {
  try {
    const { id } = event.pathParameters;

    const tradingDetails = await tradingService.getTradingDetails(id);

    if (!tradingDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Trading details not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Trading details fetched successfully",
        tradingDetails,
      }),
    };
  } catch (error) {
    console.error("Get Trading Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch trading details" }),
    };
  }
};
