var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js'); // this lets us use a local file


app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log("Express Server has started on port " + PORT);
});