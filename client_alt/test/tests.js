const {SimpleServiceClient} = require('../client');
let {server} = require("../../server/server");
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const after = require('mocha').after;
const before = require('mocha').before;
const faker = require('faker');

const SERVER_URL = 'localhost:8080';
const PROTO_PATH = process.cwd() + '/proto/simple.proto';

describe('Basic Client Tests: ', () => {
    let client;

    before(function (){
        client = new SimpleServiceClient(SERVER_URL,PROTO_PATH );
    });

    after(function() {
        server.forceShutdown();
        client = null;
        console.log({message: `gRPC client and server shutdown at ${new Date()}`})
    });

    it('Can Echo', function (done) {
        const data  = faker.lorem.words(2);

        function callback(error, result) {
            if (error) {
                console.log(error);
                done(error);
            }
            expect(result).to.be.an('object');
            expect(result.result).to.equal(data);
            done()
        }

        client.echo(data,callback)
    });

    it('Can Ping', function (done) {
        const data = faker.lorem.words(2);

        function callback(error, result) {
            if (error) {
                console.log(error);
                done(error);
            }
            expect(result).to.be.an('object');
            expect(result.result).to.equal(data);
            done()
        }

        client.ping(data,callback)
    });

});