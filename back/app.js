// Imports 
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const cors = require('cors')
// Instantiate server
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors({ origin: '*' }));

// Body Parser configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true }))

// Routes
const getRoute = require('./routes/get_data');
const postRoute =  require('./routes/post_data');

app.post('/', postRoute);
app.get('/', getRoute);

module.exports = app;