const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/ConventionCredentials';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'SELECT * FROM County');
query.on('end', () => { client.end(); });
