const Joi = require('joi');

const tradingSchema = Joi.object({
  tradingName: Joi.string()
    .max(150)
    .required()
    .messages({
      'string.max': 'Trading name must not exceed 150 characters.',
      'string.empty': 'Trading name is required.',
    }),

  postCode: Joi.string()
    .max(20)
    .optional()
    .messages({
      'string.max': 'Postcode must not exceed 20 characters.',
    }),

  addressLine1: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Address line 1 must not exceed 100 characters.',
    }),

  addressLine2: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Address line 2 must not exceed 100 characters.',
    }),

  townCity: Joi.string()
    .max(100)
    .optional()
    .messages({
      'string.max': 'Town/City must not exceed 100 characters.',
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

  isSameAsRegistered: Joi.boolean()
    .default(true)
    .optional()
    .messages({
      'boolean.base': 'isSameAsRegistered must be a boolean value.',
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

module.exports = { tradingSchema };
