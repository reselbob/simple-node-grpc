const {PingRequest, PingResponse} = require('./js/simple_pb.js');
const {SimpleServiceClient} = require('./js/simple_grpc_web_pb.js');

const CLIENT_SERVER_PORT = process.env.CLIENT_SERVER_PORT || 8081;

const client = new SimpleServiceClient('http://'+ window.location.hostname +':' + CLIENT_SERVER_PORT, null, null);

module.exports = {
    add: (data, callback) => {throw new Error('NOT IMPLEMENTED')},
    subtract: (data, callback) => {throw new Error('NOT IMPLEMENTED')},
    divide: (data, callback) => {throw new Error('NOT IMPLEMENTED')},
    multiply: (data, callback) => {throw new Error('NOT IMPLEMENTED')},
    repeat: (data, callback) => {throw new Error('NOT IMPLEMENTED')},
    ping: (data, callback) =>{
        const request = new PingRequest();
        request.setData(data);
        const metadata = {"content-type": "application/grpc-web"};
        client.ping(request, metadata, function(err, response) {
            callback(err, response.result)
        })
    },
    localPing: function(data){
        return data;
    }
};



