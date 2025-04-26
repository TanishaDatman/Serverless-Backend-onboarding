const { EntitySchema } = require('typeorm');

const Bank = new EntitySchema({
  name: 'Bank',
  tableName: 'bank_details',
  columns: {
    id: { 
      primary: true, 
      type: 'int', 
      generated: true 
    },
    accountHolderName: { 
      type: 'varchar', 
      nullable: false 
    },
    sortCode: { 
      type: 'varchar', 
      nullable: false 
    },
    accountNumber: { 
      type: 'varchar', 
      nullable: false 
    },
    confirmAccountNumber: { 
      type: 'varchar', 
      nullable: false 
    },
    // document: { 
    //   type: 'text', 
    //   nullable: true 
    // }, // For storing the bank statement URL
    flag: { 
      type: 'int', 
      nullable: true, 
      default: 0 
    },
  },
});

module.exports = { Bank};
