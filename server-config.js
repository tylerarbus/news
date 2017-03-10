var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var handler = require('./lib/request-handler.js');

var app = express();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use(cookieParser);

app.get('/', handler.renderIndex);

module.exports = app;