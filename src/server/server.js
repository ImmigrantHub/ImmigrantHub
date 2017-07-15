const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

require('./routes.js')(app, express);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Listening on port ${port}`));
