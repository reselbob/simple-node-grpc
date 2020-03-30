

const {PingRequest, PingResponse} = require('./js/simple_pb.js');
const {SimpleServiceClient} = require('./js/simple_grpc_web_pb.js');

const client = new SimpleServiceClient('http://localhost:8080');

module.exports = {
    ping: function(data, callback){
        const request = new PingRequest();
        request.setData(data);
        const metadata = {'content-type': 'application/grpc-web+proto'};
        client.ping(request, metadata, function(err, response) {
            callback(err, response.result)
        })
    },
    simplePing: function(data){
        return data;
    }
};



