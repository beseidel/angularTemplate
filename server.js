// EXPRESS

var express = require('express');
var app = express();

// BODY PARSER

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files, which tells us where to find all the static files are in the dist folder, including index.html

app.use(express.static(__dirname + '/public/dist/public'));

// Mongoose is found in the config folder
require('./server/config/mongoose');

// routes are found in the config folder
require('./server/config/routes')(app);

app.listen(8000, () => {
  console.log('listening on port 8000');
});
