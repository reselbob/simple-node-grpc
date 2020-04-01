const connect = require('connect');
const CLIENT_SERVER_PORT = process.env.CLIENT_SERVER_PORT || 8111;
const serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(CLIENT_SERVER_PORT, function(){
    console.log(`Server running on ${CLIENT_SERVER_PORT}...`);
});