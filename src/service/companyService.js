const { Company } = require("../entity/companyEntity");
const { createAppDataSource } = require("../db/dbconn");

// Create Company Details
exports.createCompanyDetails = async (data) => {
  const AppDataSource = createAppDataSource();
  const companyDetailsRepo = AppDataSource.getRepository(Company);

  const newCompanyDetails = companyDetailsRepo.create({
    companyType: data.companyType,
    organizationtype: data.organizationtype,
    companyregisternumber: data.companyregisternumber,
    bussinessLegalname: data.bussinessLegalname,
    email: data.email,
    phoneno: data.phoneno,
    url: data.url,
    postcode: data.postcode,
    address_line_1: data.address_line_1,
    address_line_2: data.address_line_2,
    town: data.town,
    county: data.county,
    country: data.country,
    flag: data.flag,
  });

  await companyDetailsRepo.save(newCompanyDetails);

  return newCompanyDetails;
};

// Get Company Details by ID
exports.getCompanyDetails = async (id) => {
  const AppDataSource = createAppDataSource();
  const companyDetailsRepo = AppDataSource.getRepository(Company);

  const companyDetails = await companyDetailsRepo.findOneBy({ id });

  return companyDetails;
};
