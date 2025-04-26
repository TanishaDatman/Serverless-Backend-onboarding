// const { createBusiness, getBusiness } = require('./src/service/businessService');

// // Create Business handler
// module.exports.createBusiness = async (event) => {
//   try {
//     const { name, type, address } = JSON.parse(event.body);

//     const newBusiness = await createBusiness({ name, type, address });

//     return {
//       statusCode: 201,
//       body: JSON.stringify({
//         message: 'Business created successfully',
//         data: newBusiness,
//       }),
//     };
//   } catch (error) {
//     console.error('Error creating business:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };

// // Get Business handler
// module.exports.getBusiness = async (event) => {
//   try {
//     const { id } = event.pathParameters;
//     const business = await getBusiness(id);

//     if (!business) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: 'Business not found' }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ data: business }),
//     };
//   } catch (error) {
//     console.error('Error fetching business:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };










// const { createBusiness, getBusiness } = require('./src/service/businessService');

// // Create Business handler
// module.exports.createBusiness = async (event) => {
//   try {
//     const { title, first_name, last_name, dob, nationality, emailId, phnno, postcode, houseno, street, town_city, county, country, flag } = JSON.parse(event.body);

//     // Create new business using the data
//     const newBusiness = await createBusiness({ 
//       title, 
//       first_name, 
//       last_name, 
//       dob, 
//       nationality, 
//       emailId, 
//       phnno, 
//       postcode, 
//       houseno, 
//       street, 
//       town_city, 
//       county, 
//       country, 
//       flag 
//     });

//     return {
//       statusCode: 201,
//       body: JSON.stringify({
//         message: 'Business created successfully',
//         data: newBusiness,
//       }),
//     };
//   } catch (error) {
//     console.error('Error creating business:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };

// // Get Business handler
// module.exports.getBusiness = async (event) => {
//   try {
//     const { id } = event.pathParameters;
//     const business = await getBusiness(id);

//     if (!business) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: 'Business not found' }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ data: business }),
//     };
//   } catch (error) {
//     console.error('Error fetching business:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };






// const { createBusiness, getBusiness } = require('./src/service/businessService');
// const { createBankDetails, getBankDetails } = require('./src/service/bankService');

// // --- Business Handlers ---

// module.exports.createBusiness = async (event) => {
//   try {
//     const { title, first_name, last_name, dob, nationality, emailId, phnno, postcode, houseno, street, town_city, county, country, flag } = JSON.parse(event.body);

//     const newBusiness = await createBusiness({
//       title, first_name, last_name, dob, nationality, emailId, phnno, postcode, houseno, street, town_city, county, country, flag
//     });

//     return {
//       statusCode: 201,
//       body: JSON.stringify({
//         message: 'Business created successfully',
//         data: newBusiness,
//       }),
//     };
//   } catch (error) {
//     console.error('Error creating business:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };

// module.exports.getBusiness = async (event) => {
//   try {
//     const { id } = event.pathParameters;
//     const business = await getBusiness(id);

//     if (!business) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: 'Business not found' }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ data: business }),
//     };
//   } catch (error) {
//     console.error('Error fetching business:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };

// // --- Bank Details Handlers ---

// module.exports.createBankDetails = async (event) => {
//   try {
//     const { accountHolderName, sortCode, accountNumber, confirmAccountNumber, flag } = JSON.parse(event.body);

//     const newBankDetails = await createBankDetails({
//       accountHolderName, sortCode, accountNumber, confirmAccountNumber, flag
//     });

//     return {
//       statusCode: 201,
//       body: JSON.stringify({
//         message: 'Bank details created successfully',
//         data: newBankDetails,
//       }),
//     };
//   } catch (error) {
//     console.error('Error creating bank details:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };

// module.exports.getBankDetails = async (event) => {
//   try {
//     const { id } = event.pathParameters;
//     const bankDetails = await getBankDetails(id);

//     if (!bankDetails) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: 'Bank details not found' }),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ data: bankDetails }),
//     };
//   } catch (error) {
//     console.error('Error fetching bank details:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal server error' }),
//     };
//   }
// };













const { createBusiness, getBusiness } = require('./src/service/businessService');
const { createBankDetails, getBankDetails } = require('./src/service/bankService');
const { createCompanyDetails, getCompanyDetails } = require('./src/service/companyService');
const { createTradingDetails, getTradingDetails } = require('./src/service/tradingService');



// --- Business Handlers ---

module.exports.createBusiness = async (event) => {
  try {
    const { title, first_name, last_name, dob, nationality, emailId, phnno, postcode, houseno, street, town_city, county, country, flag } = JSON.parse(event.body);

    const newBusiness = await createBusiness({
      title, first_name, last_name, dob, nationality, emailId, phnno, postcode, houseno, street, town_city, county, country, flag
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Business created successfully',
        data: newBusiness,
      }),
    };
  } catch (error) {
    console.error('Error creating business:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

module.exports.getBusiness = async (event) => {
  try {
    const { id } = event.pathParameters;
    const business = await getBusiness(id);

    if (!business) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Business not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data: business }),
    };
  } catch (error) {
    console.error('Error fetching business:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

// --- Bank Details Handlers ---

module.exports.createBankDetails = async (event) => {
  try {
    const { accountHolderName, sortCode, accountNumber, confirmAccountNumber, flag } = JSON.parse(event.body);

    const newBankDetails = await createBankDetails({
      accountHolderName, sortCode, accountNumber, confirmAccountNumber, flag
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Bank details created successfully',
        data: newBankDetails,
      }),
    };
  } catch (error) {
    console.error('Error creating bank details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

module.exports.getBankDetails = async (event) => {
  try {
    const { id } = event.pathParameters;
    const bankDetails = await getBankDetails(id);

    if (!bankDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Bank details not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data: bankDetails }),
    };
  } catch (error) {
    console.error('Error fetching bank details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};


// --- Company Details Handlers ---

module.exports.createCompanyDetails = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const newCompanyDetails = await createCompanyDetails(data);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Company details created successfully',
        data: newCompanyDetails,
      }),
    };
  } catch (error) {
    console.error('Error creating company details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

module.exports.getCompanyDetails = async (event) => {
  try {
    const { id } = event.pathParameters;
    const companyDetails = await getCompanyDetails(id);

    if (!companyDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Company details not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data: companyDetails }),
    };
  } catch (error) {
    console.error('Error fetching company details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

// --- Trading Details Handlers ---

module.exports.createTradingDetails = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const newTradingDetails = await createTradingDetails(data);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Trading details created successfully',
        data: newTradingDetails,
      }),
    };
  } catch (error) {
    console.error('Error creating trading details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

module.exports.getTradingDetails = async (event) => {
  try {
    const { id } = event.pathParameters;
    const tradingDetails = await getTradingDetails(id);

    if (!tradingDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Trading details not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data: tradingDetails }),
    };
  } catch (error) {
    console.error('Error fetching trading details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
