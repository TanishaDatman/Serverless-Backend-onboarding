'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bank_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      accountHolderName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sortCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accountNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      confirmAccountNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      document: {
        type: Sequelize.JSON,
        allowNull: true
      },
      flag: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bank_details');
  }
};
