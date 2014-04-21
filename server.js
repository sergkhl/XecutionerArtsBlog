var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port, function() {
    // // Once the server is listening we automatically open up a browser
    //var open = require('open');
    //open('http://localhost:' + config.port + '/');
});
console.log('Listening on port ' + config.port + '...');