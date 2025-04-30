const Joi = require('joi');

const businessSchema = Joi.object({
  title: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Title must not exceed 100 characters.',
    }),

  first_name: Joi.string()
    .min(3)
    .max(50)
    .optional()
    .messages({
      'string.min': 'First name must be at least 3 characters long.',
      'string.max': 'First name must not exceed 50 characters.',
    }),

  last_name: Joi.string()
    .min(3)
    .max(50)
    .optional()
    .messages({
      'string.min': 'Last name must be at least 3 characters long.',
      'string.max': 'Last name must not exceed 50 characters.',
    }),

  dob: Joi.string()
    // .pattern(/^\d{4}-\d{2}-\d{2}$/) // Expecting date in format YYYY-MM-DD
    .optional()
    // .messages({
    //   'string': 'Date of birth must be correct.',
    // })
    ,

  nationality: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Nationality must not exceed 100 characters.',
    }),

  emailId: Joi.string()
    .email()
    .optional()
    .messages({
      'string.email': 'Email must be a valid email address.',
    }),

  phnno: Joi.string()
    .pattern(/^\d{10}$/) // Expecting a 10-digit phone number
    .optional()
    .messages({
      'string.pattern.base': 'Phone number must be exactly 10 digits.',
    }),

  postcode: Joi.string()
    .max(20)
    .optional()
    .messages({
      'string.max': 'Postcode must not exceed 20 characters.',
    }),

  houseno: Joi.string()
    .max(50)
    .optional()
    .messages({
      'string.max': 'House number must not exceed 50 characters.',
    }),

  street: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Street name must not exceed 100 characters.',
    }),

  town_city: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Town or city must not exceed 100 characters.',
    }),

  county: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'County must not exceed 100 characters.',
    }),

  country: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Country name must not exceed 100 characters.',
    }),

  flag: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .default(0)
    .optional()
    .messages({
      'number.base': 'Flag must be a number.',
      'number.min': 'Flag must be either 0 or 1.',
      'number.max': 'Flag must be either 0 or 1.',
    }),
});

module.exports = { businessSchema };
