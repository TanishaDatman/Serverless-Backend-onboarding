const { EntitySchema } = require('typeorm');

const Business = new EntitySchema({
  name: 'Business',
  tableName: 'business_details',
  columns: {
    id: { 
      primary: true, 
      type: 'integer', 
      generated: true 
    },
    title: { 
      type: 'varchar', 
      nullable: true 
    },
    first_name: { 
      type: 'varchar', 
      nullable: true 
    },
    last_name: { 
      type: 'varchar', 
      nullable: true 
    },
    dob: { 
      type: 'varchar', 
      nullable: true 
    },
    nationality: { 
      type: 'varchar', 
      nullable: true 
    },
    emailId: { 
      type: 'varchar', 
      nullable: true 
    },
    phnno: { 
      type: 'varchar', 
      nullable: true 
    },
    postcode: { 
      type: 'varchar', 
      nullable: true 
    },
    houseno: { 
      type: 'varchar', 
      nullable: true 
    },
    street: { 
      type: 'varchar', 
      nullable: true 
    },
    town_city: { 
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
    flag: { 
      type: 'int', 
      nullable: true, 
      default: 0 
    },
  },
});

module.exports = { Business };
