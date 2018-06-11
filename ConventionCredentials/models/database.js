let pg = require('pg');
let connectionString = {
    connectionString: "postgres://postgres:edumgolem@localhost:5432/postgres"
  };
var pool = new pg.Pool();

pool.connect(connectionString, (err, client, done) => {
    var results = [];

    var query = client.query('SELECT * FROM public."Attendees" AS attendees, public."County" AS county WHERE county."CountyId" = attendees."County" ORDER BY attendees."LastName" ASC;');

    query.on('row', (row) => {
        console.log(row);
        results.push(row);
    });

    client.on('end', () => { client.end(); });
});