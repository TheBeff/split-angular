const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "node_modules")));
app.use('/browser', express.static(path.join(__dirname, "browser")));
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use('/', require(path.join(__dirname, 'api', 'sessions', 'session-middleware.js')));
app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/auth', require('./api/sessions/auth-routes.js'));
app.use('/api/groups', require('./api/groups/groups-routes.js'));
app.use('/api/users', require('./api/users/users-routes.js'));

module.exports = app;