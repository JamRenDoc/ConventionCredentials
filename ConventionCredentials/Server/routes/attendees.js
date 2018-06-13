var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = {
  database: 'postgres',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
  password: 'edumgolem'
};

/* GET home page. */
router.get('/', testing);

function testing(req, res, next) {
  console.log("Please?");
  var results = [];
  // Get a Postgres client from the connection pool
  let client = new pg.Client(connectionString);
  client.connect();
  // Handle connection errors
  if(err) {
    done();
    console.log(err);
    return res.status(500).json({success: false, data: err});
  }
  console.log("Can you hear me now?");
  // SQL Query > Select Data
  var query = client.query('SELECT * FROM public."Attendees" AS attendees, public."County" AS county WHERE county."CountyId" = attendees."County" ORDER BY attendees."LastName" ASC;');
  // Stream results back one row at a time
  console.log("How about now?");
  query.on('row', (row) => {
    console.log(row);
    results.push(row);
  });
  // After all data is returned, close connection and return results
  query.on('end', () => {
    done();
    return res.json(results);
  });
}
module.exports = router;