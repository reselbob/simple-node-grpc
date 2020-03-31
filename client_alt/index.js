const SERVER_URL = 'localhost:8080';
const PROTO_PATH = __dirname + '/proto/simple.proto';
const {SimpleServiceClient} = require('./client');

const client = new SimpleServiceClient(SERVER_URL,PROTO_PATH );

module.exports = {
    ping: function(data, callback){
        client.ping(data,callback)
    },
    echo: function(data, callback){
        callback(err, {result:data});
    }
};



