'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('company_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      companyType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      organizationtype: {
        type: Sequelize.STRING,
        allowNull: true
      },
      companyregisternumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bussinessLegalname: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneno: {
        type: Sequelize.STRING,
        allowNull: true
      },
      url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address_line_1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address_line_2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      town: {
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
    await queryInterface.dropTable('company_details');
  }
};
