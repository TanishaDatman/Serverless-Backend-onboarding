const Joi = require('joi');

// Validation helper function with a response handler
const validateInput = (schema, data) => {
  const { error } = schema.validate(data);
  return error ? error.details : null;
};

// Higher-order function to handle validation and return the response
const validateAndRespond = (schema, data) => {
  const validationDetails = validateInput(schema, data);

  if (validationDetails) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid input data',
        details: validationDetails,
      }),
    };
  }
  return null; // Validation passed
};

module.exports = { validateAndRespond };
