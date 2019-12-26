const mongoose = require('mongoose');
require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV; // development
const stage = require('./config')[environment];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (environment !== 'production') {
  app.use(logger('dev'));
}

const routes = require('./routes/index.js');

app.use('/api/v1', routes(router));

mongoose.connect('mongodb+srv://root:root@cluster0-xp77b.mongodb.net/test?retryWrites=true&w=majority', function(err) {
	console.log("kokoko"+err);
    if (err) throw err;
});

app.listen(`${3080}`, () => {
  console.log(`Server now listening at localhost:${3080}`);
});

module.exports = app;