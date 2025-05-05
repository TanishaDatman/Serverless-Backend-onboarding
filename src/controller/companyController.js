// const { initDatabase, initializeDataSource } = require("../db/dbconn");
// const companyService = require("../service/companyService");
// const {companySchema}=require('../Joi/validateCompany')
// const {validateAndRespond}=require('../helper/validate')


// // Create Company Details
// exports.createCompanyDetails = async (event) => {
//   try {


//     const body = JSON.parse(event.body);

//     const validationResponse = validateAndRespond(companySchema, body);
//     if (validationResponse) return validationResponse; // If validation fails, return the response



//     // Initialize database connection
//     await initDatabase();
//     await initializeDataSource();


//     const newCompanyDetails = await companyService.createCompanyDetails({
//       companyType: body.companyType,
//       organizationtype: body.organizationtype,
//       companyregisternumber: body.companyregisternumber,
//       bussinessLegalname: body.bussinessLegalname,
//       email: body.email,
//       phoneno: body.phoneno,
//       url: body.url,
//       postcode: body.postcode,
//       address_line_1: body.address_line_1,
//       address_line_2: body.address_line_2,
//       town: body.town,
//       county: body.county,
//       country: body.country,
//       documentName: body.documentName,
//       documentType: body.documentType,
//       flag: body.flag,
//     });

//     return {
//       statusCode: 201,
//       body: JSON.stringify({
//         message: "Company details created successfully",
//         companyDetails: newCompanyDetails,
//       }),
//     };
//   } catch (error) {
//     console.error("Create Company Details Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to create company details" }),
//     };
//   }
// };

// // Get Company Details
// exports.getCompanyDetails = async (event) => {
//   try {
//     // Initialize database connection
//     await initDatabase();
//     await initializeDataSource();

//     const { id } = event.pathParameters;  // Assuming URL like /company/{id}

//     const companyDetails = await companyService.getCompanyDetails(id);

//     if (!companyDetails) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ message: "Company details not found" }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: "Company details fetched successfully",
//         companyDetails,
//       }),
//     };
//   } catch (error) {
//     console.error("Get Company Details Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to fetch company details" }),
//     };
//   }
// };




const companyService = require("../service/companyService");
const { companySchema } = require('../Joi/validateCompany');
const { validateAndRespond } = require('../helper/validate');

// Create Company Details
exports.createCompanyDetails = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const validationResponse = validateAndRespond(companySchema, body);
    if (validationResponse) return validationResponse;

    // Use Sequelize to create company details
    const newCompanyDetails = await companyService.createCompanyDetails({
      companyType: body.companyType,
      organizationtype: body.organizationtype,
      companyregisternumber: body.companyregisternumber,
      bussinessLegalname: body.bussinessLegalname,
      email: body.email,
      phoneno: body.phoneno,
      url: body.url,
      postcode: body.postcode,
      address_line_1: body.address_line_1,
      address_line_2: body.address_line_2,
      town: body.town,
      county: body.county,
      country: body.country,
      documentName: body.documentName,
      documentType: body.documentType,
      flag: body.flag,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Company details created successfully",
        companyDetails: newCompanyDetails,
      }),
    };
  } catch (error) {
    console.error("Create Company Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create company details" }),
    };
  }
};

// Get Company Details
exports.getCompanyDetails = async (event) => {
  try {
    const { id } = event.pathParameters;

    const companyDetails = await companyService.getCompanyDetails(id);

    if (!companyDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Company details not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Company details fetched successfully",
        companyDetails,
      }),
    };
  } catch (error) {
    console.error("Get Company Details Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch company details" }),
    };
  }
};
