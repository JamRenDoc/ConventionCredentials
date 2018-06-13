const http = require('http');
const app = require('./Server/app.js');

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
