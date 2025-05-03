const Joi = require('joi');

const bankSchema = Joi.object({
  accountHolderName: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.min': 'Account holder name must be at least 3 characters long.',
      'string.max': 'Account holder name must not exceed 100 characters.',
      'any.required': 'Account holder name is required.',
    }),

  sortCode: Joi.string()
    .pattern(/^\d{6}$/) // Expecting a 6-digit number format
    .required()
    .messages({
      'string.pattern.base': 'Sort code must be exactly 6 digits.',
      'any.required': 'Sort code is required.',
    }),

    accountNumber: Joi.string()
    .pattern(/^\d{8,}$/) // Minimum 8 digits
    .required()
    .messages({
      'string.pattern.base': 'Account number must be at least 8 digits.',
      'any.required': 'Account number is required.',
    }),

  confirmAccountNumber: Joi.string()
    .valid(Joi.ref('accountNumber')) // Ensures the confirmation matches the original account number
    .required()
    .messages({
      'any.only': 'Confirmation account number must match the account number.',
      'any.required': 'Confirm account number is required.',
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

module.exports = { bankSchema };
