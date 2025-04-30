const { EntitySchema } = require('typeorm');

const Company = new EntitySchema({
  name: 'Company',
  tableName: 'company_details',
  columns: {
    id: { 
      primary: true, 
      type: 'int', 
      generated: true 
    },
    companyType: { 
      type: 'varchar', 
      nullable: true 
    },
    organizationtype: { 
      type: 'varchar', 
      nullable: true 
    },
    companyregisternumber: { 
      type: 'varchar', 
      nullable: true 
    },
    bussinessLegalname: { 
      type: 'varchar', 
      nullable: true 
    },
    email: { 
      type: 'varchar', 
      nullable: true 
    },
    phoneno: { 
      type: 'varchar', 
      nullable: true 
    },
    url: { 
      type: 'varchar', 
      nullable: true 
    },
    postcode: { 
      type: 'varchar', 
      nullable: true 
    },
    address_line_1: { 
      type: 'varchar', 
      nullable: true 
    },
    address_line_2: { 
      type: 'varchar', 
      nullable: true 
    },
    town: { 
      type: 'varchar', 
      nullable: true 
    },
    county: { 
      type: 'varchar', 
      nullable: true 
    },
    country: { 
      type: 'varchar', 
      nullable: true 
    },
    document: { 
      type: 'json', 
      nullable: true, 
    },
    flag: { 
      type: 'int', 
      nullable: true, 
      default: 0 
    },
  },
});

module.exports = { Company };
