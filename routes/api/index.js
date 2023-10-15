const express = require('express');
const packageRouter = require('./package');

const indexRouter = express.Router();

indexRouter.use('/package', packageRouter);

module.exports = indexRouter;
