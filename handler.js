const {createBankDetails,getBankDetails}=require('./src/controller/bankController')
const {createBusiness,getBusiness}=require('./src/controller/businessController')
const{createCompanyDetails,getCompanyDetails}=require('./src/controller/companyController')
const{createTradingDetails,getTradingDetails}=require('./src/controller/tradingController')


module.exports={
  createBankDetails,
  getBankDetails,
  createBusiness,
  getBusiness,
  createCompanyDetails,
  getCompanyDetails,
  createTradingDetails,
  getTradingDetails
}