const server = require('http').createServer(require('./app'));
const db = require('./db/index');

const port = process.env.PORT || 3000;

server.listen(port, function(){
	console.log("listening on port: " + port);
})

if(process.env.SYNC)
  db.syncAndSeed();