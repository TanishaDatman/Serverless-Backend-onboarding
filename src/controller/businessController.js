// const { initDatabase, initializeDataSource } = require("../db/dbconn");
// const businessService = require("../service/businessService");
// const {businessSchema}=require('../Joi/validateBusiness')
// const {validateAndRespond}=require('../helper/validate')

// // await new Promise((resolve) => setTimeout(resolve, 30000)); 

// exports.createBusiness = async (event) => {
//     try {
//       const body = JSON.parse(event.body);
//       console.log("inside controller business --------->",body)
  
//       // Validate the input data
//       const validationResponse = validateAndRespond(businessSchema, body);
//       if (validationResponse) return validationResponse; // If validation fails, return the response
//       console.log('Validation Result:', validationResponse);
  
 
//       await initDatabase();
//       await initializeDataSource();
  
//       const newBusiness = await businessService.createBusiness({
//         title: body.title,
//         first_name: body.first_name,
//         last_name: body.last_name,
//         dob: body.dob,
//         nationality: body.nationality,
//         emailId: body.emailId,
//         phnno: body.phnno,
//         postcode: body.postcode,
//         houseno: body.houseno,
//         street: body.street,
//         town_city: body.town_city,
//         county: body.county,
//         country: body.country,
//         documentName: body.documentName,
//         documentType: body.documentType, //{name:efef,type:efbfb}
//         flag: body.flag,
//       });
  
//       return {
//         statusCode: 201,
//         body: JSON.stringify({
//           message: "Business created successfully",
//           business: newBusiness,
//         }),
//       };
//     } catch (error) {
//       console.error("Create Business Error:", error);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: "Failed to create business" }),
//       };
//     }
//   };
  

  

// // Get Business by ID
// exports.getBusiness = async (event) => {
//   try {
  
//     await initDatabase();
//     await initializeDataSource();

//     const { id } = event.pathParameters; 

//     const business = await businessService.getBusiness(id);

//     if (!business) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ message: "Business not found" }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Business fetched successfully",
//         business,
//       }),
//     };
//   } catch (error) {
//     console.error("Get Business Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to fetch business" }),
//     };
//   }
// };


const middy = require('@middy/core');
const httpJsonBodyParser = require('@middy/http-json-body-parser');
const httpErrorHandler = require('@middy/http-error-handler');
const httpEventNormalizer = require('@middy/http-event-normalizer');

const { initDatabase, initializeDataSource } = require('../db/dbconn');
const businessService = require('../service/businessService');
const { businessSchema } = require('../Joi/validateBusiness');
const { validateAndRespond } = require('../helper/validate');

// Base function without middleware
const baseCreateBusiness = async (event) => {

  console.log("Full event received:", JSON.stringify(event, null, 2));

  // Checking jsonBodyParser middleware is working
  console.log("Parsed body from jsonBodyParser middleware:", event.body);
  console.log("Type of body (should be 'object'):", typeof event.body);

  // Checking eventNormalizer middleware is working
  console.log("Normalized query params:", event.queryStringParameters);
  console.log("Normalized path params:", event.pathParameters);


  const body = event.body; // Already parsed by httpJsonBodyParser
  console.log("inside controller business --------->", body);

  // Validate input
  const validationResponse = validateAndRespond(businessSchema, body);
  if (validationResponse) return validationResponse;
  console.log('Validation Result:', validationResponse);

  await initDatabase();
  await initializeDataSource();

  const newBusiness = await businessService.createBusiness({
    title: body.title,
    first_name: body.first_name,
    last_name: body.last_name,
    dob: body.dob,
    nationality: body.nationality,
    emailId: body.emailId,
    phnno: body.phnno,
    postcode: body.postcode,
    houseno: body.houseno,
    street: body.street,
    town_city: body.town_city,
    county: body.county,
    country: body.country,
    documentName: body.documentName,
    documentType: body.documentType,
    flag: body.flag,
  });

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Business created successfully",
      business: newBusiness,
    }),
  };
};

// Export the wrapped handler using middy
exports.createBusiness = middy(baseCreateBusiness)
  .use(httpJsonBodyParser())      // Parses event.body to JSON
  .use(httpEventNormalizer())     // Ensures event has consistent shape
  .use(httpErrorHandler());       // Catches and formats unhandled errors


exports.getBusiness = async (event) => {
  try {
    await initDatabase();
    await initializeDataSource();

    const { id } = event.pathParameters;

    const business = await businessService.getBusiness(id);

    if (!business) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Business not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Business fetched successfully",
        business,
      }),
    };
  } catch (error) {
    console.error("Get Business Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch business" }),
    };
  }
};
