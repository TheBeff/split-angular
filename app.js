const express = require('express');
const app = express();
const path = require('path');


app.use('/browser', express.static(path.join(__dirname, "browser")));
app.use(express.static(path.join(__dirname, "node_modules")));

module.exports = app;