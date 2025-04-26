const { EntitySchema } = require('typeorm');

const Trading = new EntitySchema({
  name: 'Trading',
  tableName: 'trading_details',
  columns: {
    id: { 
      primary: true, 
      type: 'int', 
      generated: true 
    },
    tradingName: { 
      type: 'varchar', 
      nullable: false 
    },
    postCode: { 
      type: 'varchar', 
      nullable: true 
    },
    addressLine1: { 
      type: 'varchar', 
      nullable: true 
    },
    addressLine2: { 
      type: 'varchar', 
      nullable: true 
    },
    townCity: { 
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
    isSameAsRegistered: { 
      type: 'boolean', 
      default: true 
    },
    flag: { 
      type: 'int', 
      nullable: true, 
      default: 0 
    },
    createdAt: { 
      type: 'timestamp', 
      default: () => 'CURRENT_TIMESTAMP' 
    },
    updatedAt: { 
      type: 'timestamp', 
      default: () => 'CURRENT_TIMESTAMP' 
    },
  },
});

module.exports = { Trading };
