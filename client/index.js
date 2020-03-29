

const {PingRequest, PingResponse} = require('./js/simple_pb.js');
const {SimpleService} = require('./js/simple_grpc_web_pb.js');

const simpleService = new SimpleService('http://localhost:8080');

module.exports = {
    ping: function(data, callback){
        const request = new PingRequest();
        request.setData(data);
        simpleService.ping(request, {}, function(err, response) {
            callback(err, response.result)
        })
    },
    simplePing: function(data){
        return data;
    }
};



