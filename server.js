const express = require('express');

const server = express();
// const api = require('./api');

server.use(express.static(`${__dirname}/dist`));
const port = process.env.PORT || 3002;

server.listen(port, function() {
    console.log("App is running on port " + port);
});

// server.use('/api', api);