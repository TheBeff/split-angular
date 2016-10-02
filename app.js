const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "node_modules")));
app.use('/browser', express.static(path.join(__dirname, "browser")));
app.use('/public', express.static(path.join(__dirname, "public")));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;