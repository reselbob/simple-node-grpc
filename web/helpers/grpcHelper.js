"use strict";
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = process.cwd() + '/proto/simple.proto';
const PORT = process.env.PORT || 50051;
const SERVER_URL = process.env.GRPC_SERVER_URL || 'localhost:50051';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const simplegrpc = grpc.loadPackageDefinition(packageDefinition).simplegrpc;

const client = new simplegrpc.SimpleService(SERVER_URL,
    grpc.credentials.createInsecure());

const grpcMethods = {ADD: 'add', SUBTRACT: 'substract', MULTIPLY: 'multiply', DIVIDE: 'divide'};

const processNumbers = (numbers, grpcMethod, renderElementId) =>{
    switch(grpcMethod){
        case grpcMethods.ADD: console.log(`I am processing ${grpcMethods.ADD}`);break;
        case grpcMethods.SUBTRACT: console.log(`I am processing ${grpcMethods.SUBTRACT}`);break;
        case grpcMethods.MULTIPLY: console.log(`I am processing ${grpcMethods.MULTIPLY}`);break;
        case grpcMethods.DIVIDE: console.log(`I am processing ${grpcMethods.DIVIDE}`);break;
    };
};

const ping = () =>{
    const str = `Pinged at ${new Date()}`;
    console.log(str);
    return str;
};



module.exports = {grpcMethods, processNumbers};