var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = "postgres://postgres:edumgolem@localhost:5432/postgres";

var pool = new pg.Pool();


/* GET home page. */
router.get('/', function(req, res, next) {
  var results = [];
  // Get a Postgres client from the connection pool
  pool.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    var query = client.query('SELECT * FROM public."Attendees" AS attendees, public."County" AS county WHERE county."CountyId" = attendees."County" ORDER BY attendees."LastName" ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      console.log(row);
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;