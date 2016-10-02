const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "node_modules")));
app.use('/browser', express.static(path.join(__dirname, "browser")));
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use('/', require(path.join(__dirname, 'api', 'sessions', 'session-middleware.js')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/groups', require(path.join(__dirname, 'api', 'groups', 'groups-routes.js')));
app.use('/api/users', require(path.join(__dirname, 'api', 'users', 'users-routes.js')));

module.exports = app;