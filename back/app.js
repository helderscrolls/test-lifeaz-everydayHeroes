// Imports 
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const cors = require('cors')
// Instantiate server
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors({ origin: 'http://localhost:8100' }));

// Body Parser configuration
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

// Routes
const getRoute = require('./routes/get_data')
app.use('/', getRoute);

module.exports = app;