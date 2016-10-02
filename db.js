const Sequelize = require('sequelize');
const config = require('./config.json');

const db =  new Sequelize(config.database_uri, {logging: false});



module.exports = {
	db
}