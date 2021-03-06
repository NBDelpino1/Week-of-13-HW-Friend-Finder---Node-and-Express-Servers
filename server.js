// Dependencies 
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Very important snippet, enables app to work on Heroku
var port = process.env.PORT;
app.listen(port);
// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// CSS
app.use(express.static('app/public'));
// Use require to be able to access these files
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});


