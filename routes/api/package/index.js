const express = require('express');
const { param, query } = require('express-validator');
const { httpSuccess, httpInternalServerError } = require('../../../Utils/htttp-response');
const validatePayload = require('../../../middleware/express-validator');

const packageRouter = express.Router();

packageRouter.get(
  '/',
  [
    query('limit').default(20).isFloat({ min: 20, max: 100 }).withMessage('Value must be a number between 20 and 300'),
    query('page').default(1).isNumeric().withMessage('Value must be a number'),
  ],
  validatePayload,
  (req, res) => {
    try {
      return httpSuccess(res, {});
    } catch (error) {
      return httpInternalServerError(res, { message: error.message });
    }
  },
);

packageRouter.get(
  '/:id',
  [
    param('id').isNumeric(),
  ],
  validatePayload,
  (req, res) => {
    try {
      return httpSuccess(res, {});
    } catch (error) {
      return httpInternalServerError(res, { message: error.message });
    }
  },
);
packageRouter.post(
  '/',
  validatePayload,
  (req, res) => {
    try {
      return httpSuccess(res, {});
    } catch (error) {
      return httpInternalServerError(res, {
        message: 'Something went wrong. Please contact your technical support.',
        error_message: error.message,
      });
    }
  },
);
packageRouter.put(
  '/:id',
  validatePayload,
  (req, res) => {
    try {
      return httpSuccess(res, {});
    } catch (error) {
      return httpInternalServerError(res, {
        message: 'Something went wrong. Please contact your technical support.',
        error_message: error.message,
      });
    }
  },
);
packageRouter.patch(
  '/:id',
  validatePayload,
  (req, res) => {
    try {
      return httpSuccess(res, {});
    } catch (error) {
      return httpInternalServerError(res, {
        message: 'Something went wrong. Please contact your technical support.',
        error_message: error.message,
      });
    }
  },
);
packageRouter.delete(
  '/:id',
  validatePayload,
  (req, res) => {
    try {
      return httpSuccess(res, {});
    } catch (error) {
      return httpInternalServerError(res, {
        message: 'Something went wrong. Please contact your technical support.',
        error_message: error.message,
      });
    }
  },
);

module.exports = packageRouter;
