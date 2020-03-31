#!/usr/bin/env node
const SERVER_URL = 'localhost:8080';
const PROTO_PATH = __dirname + '/proto/simple.proto';
const {SimpleServiceClient} = require('./client');



var argv = require('yargs')
    .usage('Usage: $0 -o [string] - d [array] -m [string] -l 100 [num')
    .example('$0 -o add -d [4,5.5,6]', 'Sums up the numbers in the array [4, 5.5, 6]')
    .example('$0 -o repeat -m I have a secret -c 100', 'returns the messages, "I have a secret" in a stream of 100 messages')
    .alias('o', 'operation')
    .alias('d', 'data')
    .alias('m', 'message')
    .alias('c', 'count')
    .alias('u', 'url')
    .default('u', SERVER_URL)
    .describe('o', 'The operation to perform. Choose from the operations: add, subtract, multiply, divide, repeat,ping')
    .describe('d', 'The array of numbers to process. Used with the operations, add, subtract, multiply, divide')
    .describe('m', 'Used the with the operation, repeat and ping. The message to transit.')
    .describe('c', 'Used the with the operation, repeat. The count of the number of messages to return in the stream.')
    .describe('u', 'The url of the gRPC server.')
    .demandOption(['o'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2020')
    .argv;

const client = new SimpleServiceClient(argv.u, PROTO_PATH);

const mathCallback = (err, response) =>{
    console.log(JSON.stringify(response.result))
};

const repeatCallback = (err, response) =>{
    console.log(response)
}

const add = (arr) =>{
    const numbers = arr;
    client.add(numbers, mathCallback);
};

const subtract = (arr) =>{
    const numbers = arr;
    client.subtract(numbers, mathCallback);
};

const divide = (arr) =>{
    const numbers = arr;
    client.divide(numbers, mathCallback);
};

const multiple = (arr) =>{
    const numbers = arr;
    client.multiply(numbers, mathCallback);
};

const repeat = (message, count) =>{
    client.repeat({message, count}, repeatCallback);
};

const ping = (message) =>{
    const callback = (err, response) =>{
        console.log(`I am pinging the message: ${response.result}.`)
    }
    client.ping(message, callback)
};

switch(argv.o.toLowerCase()){
    case('add'): add(JSON.parse(argv.d));break;
    case('subtract'): subtract(JSON.parse(argv.d));break;
    case('multiply'): multiply(JSON.parse(argv.d));break;
    case('divide'): divide(JSON.parse(argv.d));break;
    case('repeat'): repeat(argv.m, argv.c);break;
    case('ping'): ping(argv.m);break;
    default: console.log(argv.o + ' is an unknown operation')
}
