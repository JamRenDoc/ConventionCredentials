const express = require('express');
// const path = require('path');
// const logger = require('morgan');
const bodyParser = require('body-parser');
const pg = require('pg');

const connectionString = {
  database: 'postgres',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
  password: 'edumgolem'
};


// var attendees = require('./routes/attendees');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Referer, User-Agent");
  next();
});

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
// app.use('/attendee', attendees);

app.get('/test/', testing);

function testing(req, res, next) {
  var results = res;
  // Get a Postgres client from the connection pool
  let client = new pg.Client(connectionString);
  client.connect();
  // Handle connection errors

  // SQL Query > Select Data
  client.query('SELECT * FROM public."Attendees" AS attendees, public."County" AS county WHERE county."CountyId" = attendees."County" ORDER BY attendees."LastName" ASC;', (err, res) => {
    return results.json(res);
  });
//   // Stream results back one row at a time
//   console.log("How about now?");
//   query.on('row', (row) => {
//     console.log(row);
//     results.push(row);
//   });
//   // After all data is returned, close connection and return results
//   query.on('end', () => {
//     done();
//     return res.json(results);
//   });
}


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   next(err);
// });

module.exports = app;
