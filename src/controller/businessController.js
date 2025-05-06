const middy = require('@middy/core');
const httpJsonBodyParser = require('@middy/http-json-body-parser');
const httpErrorHandler = require('@middy/http-error-handler');
const httpEventNormalizer = require('@middy/http-event-normalizer');

const businessService = require('../service/businessService');
const { businessSchema } = require('../Joi/validateBusiness');
const { validateAndRespond } = require('../helper/validate');

// Create Business
const baseCreateBusiness = async (event) => {
  try {
    console.log("Full event received:", JSON.stringify(event, null, 2));
    const body = event.body;

    const validationResponse = validateAndRespond(businessSchema, body);
    if (validationResponse) return validationResponse;

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
  } catch (error) {
    console.error("Create Business Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create business" }),
    };
  }
};

exports.createBusiness = middy(baseCreateBusiness)
  .use(httpJsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpErrorHandler());

// Get Business
exports.getBusiness = async (event) => {
  try {
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
