const {PingRequest, PingResponse} = require('./js/simple_pb.js');
const {SimpleServiceClient} = require('./js/simple_grpc_web_pb.js');

const ENVOY_PORT = process.env.CLIENT_SERVER_PORT || 8080;
//const ENVOY_PROTOCOL = process.env.SECURE_CALL ? 'https' : 'http';

const ENVOY_PROTOCOL = "https";

//const simpleServiceClientUrl = 'https://localhost:8080';
const simpleServiceClientUrl = `${ENVOY_PROTOCOL}://`+ window.location.hostname +':' + ENVOY_PORT;
console.log( {simpleServiceClientUrl});

const client = new SimpleServiceClient(simpleServiceClientUrl, null, null);

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



