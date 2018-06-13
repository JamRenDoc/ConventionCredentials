let pg = require('pg');
let connectionString = {
    database: 'postgres',
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    password: 'edumgolem'
};
let client = new pg.Client(connectionString);
client.connect();
client.query('SELECT * FROM public."Attendees" AS attendees, public."County" AS county WHERE county."CountyId" = attendees."County" ORDER BY attendees."LastName" ASC;', (err, res) => {
    if (err) {
        response = ['Error'];
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
});
client.on('end', () => { client.end(); });
