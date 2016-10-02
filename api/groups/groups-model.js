const Sequelize = require('sequelize');
const db = require('../../db');

const Groups = db.define('groups', {
	name: Sequelize.STRING,
});


module.exports = Groups;