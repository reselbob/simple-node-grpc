

const {PingRequest, PingResponse} = require('./js/simple_pb.js');
const {SimpleServiceClient} = require('./js/simple_grpc_web_pb.js');

const client = new SimpleServiceClient('http://'+window.location.hostname+':8080', null, null);

module.exports = {
    ping: function(data, callback){
        const request = new PingRequest();
        request.setData(data);
        const metadata = {"content-type": "application/grpc-web"};
        client.ping(request, metadata, function(err, response) {
            callback(err, response.result)
        })
    },
    simplePing: function(data){
        return data;
    }
};



