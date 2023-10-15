const express = require('express');
const morgan = require('morgan');
const indexRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 43000;

app.use(morgan('combined'));
app.use('/api', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
