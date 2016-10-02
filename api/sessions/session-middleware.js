const router = require('express').Router();
const config = require('../../config.json');
var session = require('express-session');

router.use(session({
	secret: config.session
}));

module.exports = router;