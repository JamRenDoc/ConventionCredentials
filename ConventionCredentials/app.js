var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


var attendees = require('./routes/attendees');
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Referer, User-Agent");
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use('/attendee', attendees);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  next(err);
});

module.exports = app;