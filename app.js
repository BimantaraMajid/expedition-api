const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/api');
const { httpNotFound } = require('./Utils/htttp-response');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(express.json());
app.use('/api', indexRouter);
app.use('/*', (req, res) => httpNotFound(res, { error_message: 'router not found' }));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
