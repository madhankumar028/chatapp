var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());


app.use(session({ secret: 'chatapp' }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port);
console.log('The magic happens on port ' + port);
