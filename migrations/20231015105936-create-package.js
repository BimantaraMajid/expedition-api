const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      transaction_id: {
        type: Sequelize.STRING,
      },
      customer_name: {
        type: Sequelize.STRING,
      },
      customer_code: {
        type: Sequelize.STRING,
      },
      transaction_amount: {
        type: Sequelize.STRING,
      },
      transaction_discount: {
        type: Sequelize.STRING,
      },
      transaction_additional_field: {
        type: Sequelize.STRING,
      },
      transaction_payment_type: {
        type: Sequelize.STRING,
      },
      transaction_state: {
        type: Sequelize.STRING,
      },
      transaction_code: {
        type: Sequelize.STRING,
      },
      transaction_order: {
        type: Sequelize.INTEGER,
      },
      location_id: {
        type: Sequelize.STRING,
      },
      organization_id: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      transaction_payment_type_name: {
        type: Sequelize.STRING,
      },
      transaction_cash_amount: {
        type: Sequelize.DOUBLE,
      },
      transaction_cash_change: {
        type: Sequelize.DOUBLE,
      },
      customer_attribute: {
        type: Sequelize.JSONB,
      },
      connote: {
        type: Sequelize.JSONB,
      },
      connote_id: {
        type: Sequelize.STRING,
      },
      origin_data: {
        type: Sequelize.JSONB,
      },
      destination_data: {
        type: Sequelize.JSONB,
      },
      koli_data: {
        type: DataTypes.JSONB,
      },
      custom_field: {
        type: Sequelize.JSONB,
      },
      currentLocation: {
        type: Sequelize.JSONB,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('packages');
  },
};
