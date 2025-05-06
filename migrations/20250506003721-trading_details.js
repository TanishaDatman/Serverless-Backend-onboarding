'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trading_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tradingName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      postCode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      addressLine1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      addressLine2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      townCity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      county: {
        type: Sequelize.STRING,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isSameAsRegistered: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      flag: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trading_details');
  }
};
