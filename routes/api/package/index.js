const express = require('express');
const { param, query, body } = require('express-validator');
const validatePayload = require('../../../middleware/express-validator');
const {
  getPackages,
  getPackagesById,
  postPackage,
  putPackage,
  patchPackage,
  deletePackage,
} = require('../../../controllers/package');

const packageRouter = express.Router();

packageRouter.get(
  '/',
  [
    query('limit').default(20).isFloat({ min: 20, max: 100 }).withMessage('Value must be a number between 20 and 100'),
    query('page').default(1).isNumeric().withMessage('Value must be a number'),
  ],
  validatePayload,
  getPackages,
);

packageRouter.get(
  '/:id',
  [
    param('id').isNumeric().withMessage('Value must be a number'),
  ],
  validatePayload,
  getPackagesById,
);

packageRouter.post(
  '/',
  [
    body('transaction_id').notEmpty(),
    body('customer_name').notEmpty(),
    body('customer_code').notEmpty(),
    body('transaction_amount').notEmpty(),
    body('transaction_discount').notEmpty(),
    body('transaction_payment_type').notEmpty(),
    body('transaction_state').notEmpty(),
    body('transaction_code').notEmpty(),
    body('transaction_order').notEmpty(),
    body('location_id').notEmpty(),
    body('organization_id').notEmpty(),
    body('transaction_payment_type_name').notEmpty(),
    body('transaction_cash_amount').notEmpty(),
    body('transaction_cash_change').notEmpty(),
    body('customer_attribute').notEmpty(),
    body('connote').notEmpty(),
    body('connote_id').notEmpty(),
    body('origin_data').notEmpty(),
    body('destination_data').notEmpty(),
    body('koli_data').notEmpty(),
    body('custom_field').notEmpty(),
    body('currentLocation').notEmpty(),
  ],
  validatePayload,
  postPackage,
);

packageRouter.put(
  '/:id',
  [
    param('id').isNumeric().withMessage('Value must be a number'),
    body('transaction_id').notEmpty(),
    body('customer_name').notEmpty(),
    body('customer_code').notEmpty(),
    body('transaction_amount').notEmpty(),
    body('transaction_discount').notEmpty(),
    body('transaction_payment_type').notEmpty(),
    body('transaction_state').notEmpty(),
    body('transaction_code').notEmpty(),
    body('transaction_order').notEmpty(),
    body('location_id').notEmpty(),
    body('organization_id').notEmpty(),
    body('transaction_payment_type_name').notEmpty(),
    body('transaction_cash_amount').notEmpty(),
    body('transaction_cash_change').notEmpty(),
    body('customer_attribute').notEmpty(),
    body('connote').notEmpty(),
    body('connote_id').notEmpty(),
    body('origin_data').notEmpty(),
    body('destination_data').notEmpty(),
    body('koli_data').notEmpty(),
    body('custom_field').notEmpty(),
    body('currentLocation').notEmpty(),
  ],
  validatePayload,
  putPackage,
);

packageRouter.patch(
  '/:id',
  [
    param('id').isNumeric().withMessage('Value must be a number'),
  ],
  validatePayload,
  patchPackage,
);

packageRouter.delete(
  '/:id',
  [
    param('id').isNumeric().withMessage('Value must be a number'),
  ],
  validatePayload,
  deletePackage,
);

module.exports = packageRouter;
