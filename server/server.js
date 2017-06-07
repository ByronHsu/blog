const express = require('express');
const api = require('./api');

const server = express();

server.use(express.static(`${__dirname}/../build`));
server.use('/api', api);
const port = process.env.PORT || 3002;
//const port = process.env.PORT;
server.listen(port);
console.log('server is running on 3002');


