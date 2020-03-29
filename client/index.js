const {PingRequest, PingResponse} = require('./js/simple_pb.js');
const {SimpleService} = require('./js/simple_grpc_web_pb.js');

var simpleService = new SimpleService('http://localhost:8080');

var request = new PingRequest();
request.setData('Hello World!');

simpleService.ping(request, {}, function(err, response) {
    // ...
});