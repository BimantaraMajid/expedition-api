const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Packages.init({
    created_at: DataTypes.DATE,
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    transaction_id: DataTypes.STRING,
    customer_name: DataTypes.STRING,
    customer_code: DataTypes.STRING,
    transaction_amount: DataTypes.STRING,
    transaction_discount: DataTypes.STRING,
    transaction_additional_field: DataTypes.STRING,
    transaction_payment_type: DataTypes.STRING,
    transaction_state: DataTypes.STRING,
    transaction_code: DataTypes.STRING,
    transaction_order: DataTypes.INTEGER,
    location_id: DataTypes.STRING,
    organization_id: DataTypes.INTEGER,
    transaction_payment_type_name: DataTypes.STRING,
    transaction_cash_amount: DataTypes.DOUBLE,
    transaction_cash_change: DataTypes.DOUBLE,
    customer_attribute: DataTypes.JSONB,
    connote: DataTypes.JSONB,
    connote_id: DataTypes.STRING,
    origin_data: DataTypes.JSONB,
    destination_data: DataTypes.JSONB,
    koli_data: DataTypes.JSONB,
    custom_field: DataTypes.JSONB,
    currentLocation: DataTypes.JSONB,
  }, {
    sequelize,
    modelName: 'packages',
  });
  return Packages;
};
