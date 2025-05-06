'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('business_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emailId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phnno: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      postcode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      houseno: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      town_city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      county: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      document: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      flag: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('business_details');
  }
};
