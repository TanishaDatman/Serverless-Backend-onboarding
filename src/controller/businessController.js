const { initDatabase, initializeDataSource } = require("../db/dbconn");
const businessService = require("../service/businessService");
const {businessSchema}=require('../Joi/validateBusiness')
const {validateAndRespond}=require('../helper/validate')

// Create Business
exports.createBusiness = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const validationResponse = validateAndRespond(businessSchema, body);
    if (validationResponse) return validationResponse; // If validation fails, return the response
    console.log('Validation Result:', validationResponse)


    // Initialize database connection
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
      flag: body.flag,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Business created successfully",
        business: newBusiness,
      }),
    };
  } catch (error) {
    console.error("Create Business Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create business" }),
    };
  }
};

// Get Business by ID
exports.getBusiness = async (event) => {
  try {
    // Initialize database connection
    await initDatabase();
    await initializeDataSource();

    const { id } = event.pathParameters; // Assuming /business/{id}

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
