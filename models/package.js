const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Package.init({
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
    customer_attribute: DataTypes.JSON,
    connote: DataTypes.JSON,
    connote_id: DataTypes.STRING,
    origin_data: DataTypes.JSON,
    destination_data: DataTypes.JSON,
    koli_data: DataTypes.ARRAY,
    custom_field: DataTypes.JSON,
    currentLocation: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'package',
  });
  return Package;
};
