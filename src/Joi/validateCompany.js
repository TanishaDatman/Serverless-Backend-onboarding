const Joi = require('joi');

const companySchema = Joi.object({
  companyType: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Company type must not exceed 100 characters.',
    }),

  organizationtype: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Organization type must not exceed 100 characters.',
    }),

  companyregisternumber: Joi.string()
    .max(50)
    .optional()
    .messages({
      'string.max': 'Company registration number must not exceed 50 characters.',
    }),

  bussinessLegalname: Joi.string()
    .max(150)
    .optional()
    .messages({
      'string.max': 'Business legal name must not exceed 150 characters.',
    }),

  email: Joi.string()
    .email()
    .optional()
    .messages({
      'string.email': 'Email must be a valid email address.',
    }),

  phoneno: Joi.string()
    .pattern(/^\d{10}$/) // Expecting a 10-digit phone number
    .optional()
    .messages({
      'string.pattern.base': 'Phone number must be exactly 10 digits.',
    }),

  url: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'URL must be a valid URL.',
    }),

  postcode: Joi.string()
    .max(20)
    .optional()
    .messages({
      'string.max': 'Postcode must not exceed 20 characters.',
    }),

  address_line_1: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Address line 1 must not exceed 100 characters.',
    }),

  address_line_2: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Address line 2 must not exceed 100 characters.',
    }),

  town: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Town must not exceed 100 characters.',
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
      'string.max': 'Country must not exceed 100 characters.',
    }),

   documentName: Joi.string()
       // .required()
       .optional()
       .messages({
         'string.base': 'Document name must be a string.',
         'any.required': 'Document name is required.',
       }),
   
     documentType: Joi.string()
       // .valid('png', 'jpg', 'pdf', 'docx') // Add other file types as required
       // .required()
       .optional()
       .messages({
       //   'string.base': 'Document type must be a string.',
         'any.required': 'Document type is required.',
         'any.only': 'Document type must be one of the following: png, jpg, pdf, docx.',
       }),

//   flag: Joi.number()
//     .integer()
//     .min(0)
//     .max(1)
//     .default(0)
//     .optional()
//     .messages({
//       'number.base': 'Flag must be a number.',
//       'number.min': 'Flag must be either 0 or 1.',
//       'number.max': 'Flag must be either 0 or 1.',
//     }),
// });

flag: Joi.number()
  .valid(0, 1, 2, 3)
  .default(0)
  .optional()
  .messages({
    'number.base': 'Flag must be a number.',
    'any.only': 'Flag must be one of the following values: 0, 1, 2, or 3.',
  }),
});

module.exports = { companySchema };
