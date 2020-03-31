const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

class SimpleServiceClient {
    constructor(serverURL, protoPath) {
        const packageDefinition = protoLoader.loadSync(
            protoPath,
            {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            });

        const simplegrpc = grpc.loadPackageDefinition(packageDefinition).simplegrpc;

        this.client = new simplegrpc.SimpleService(serverURL,
            grpc.credentials.createInsecure());
    }
    echo(message, callback){
        callback(null, {result:message});
    }
    ping(message, callback){
        this.client.Ping({data:message}, callback);
    }
}


module.exports = {SimpleServiceClient};