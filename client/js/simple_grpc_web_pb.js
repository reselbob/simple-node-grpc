/**
 * @fileoverview gRPC-Web generated client stub for simplegrpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.simplegrpc = require('./simple_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.simplegrpc.SimpleServiceClient =
    function(hostname, credentials, options) {
        if (!options) options = {};
        options['format'] = 'text';

        /**
         * @private @const {!grpc.web.GrpcWebClientBase} The client
         */
        this.client_ = new grpc.web.GrpcWebClientBase(options);

        /**
         * @private @const {string} The hostname
         */
        this.hostname_ = hostname;

    };


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.simplegrpc.SimpleServicePromiseClient =
    function(hostname, credentials, options) {
        if (!options) options = {};
        options['format'] = 'text';

        /**
         * @private @const {!grpc.web.GrpcWebClientBase} The client
         */
        this.client_ = new grpc.web.GrpcWebClientBase(options);

        /**
         * @private @const {string} The hostname
         */
        this.hostname_ = hostname;

    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodDescriptor_SimpleService_Add = new grpc.web.MethodDescriptor(
    '/simplegrpc.SimpleService/Add',
    grpc.web.MethodType.UNARY,
    proto.simplegrpc.Request,
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodInfo_SimpleService_Add = new grpc.web.AbstractClientBase.MethodInfo(
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simplegrpc.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServiceClient.prototype.add =
    function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/simplegrpc.SimpleService/Add',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Add,
            callback);
    };


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simplegrpc.Response>}
 *     A native promise that resolves to the response
 */
proto.simplegrpc.SimpleServicePromiseClient.prototype.add =
    function(request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/simplegrpc.SimpleService/Add',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Add);
    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodDescriptor_SimpleService_Subtract = new grpc.web.MethodDescriptor(
    '/simplegrpc.SimpleService/Subtract',
    grpc.web.MethodType.UNARY,
    proto.simplegrpc.Request,
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodInfo_SimpleService_Subtract = new grpc.web.AbstractClientBase.MethodInfo(
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simplegrpc.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServiceClient.prototype.subtract =
    function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/simplegrpc.SimpleService/Subtract',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Subtract,
            callback);
    };


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simplegrpc.Response>}
 *     A native promise that resolves to the response
 */
proto.simplegrpc.SimpleServicePromiseClient.prototype.subtract =
    function(request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/simplegrpc.SimpleService/Subtract',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Subtract);
    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodDescriptor_SimpleService_Multiply = new grpc.web.MethodDescriptor(
    '/simplegrpc.SimpleService/Multiply',
    grpc.web.MethodType.UNARY,
    proto.simplegrpc.Request,
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodInfo_SimpleService_Multiply = new grpc.web.AbstractClientBase.MethodInfo(
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simplegrpc.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServiceClient.prototype.multiply =
    function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/simplegrpc.SimpleService/Multiply',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Multiply,
            callback);
    };


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simplegrpc.Response>}
 *     A native promise that resolves to the response
 */
proto.simplegrpc.SimpleServicePromiseClient.prototype.multiply =
    function(request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/simplegrpc.SimpleService/Multiply',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Multiply);
    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodDescriptor_SimpleService_Divide = new grpc.web.MethodDescriptor(
    '/simplegrpc.SimpleService/Divide',
    grpc.web.MethodType.UNARY,
    proto.simplegrpc.Request,
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simplegrpc.Request,
 *   !proto.simplegrpc.Response>}
 */
const methodInfo_SimpleService_Divide = new grpc.web.AbstractClientBase.MethodInfo(
    proto.simplegrpc.Response,
    /**
     * @param {!proto.simplegrpc.Request} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.Response.deserializeBinary
);


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simplegrpc.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServiceClient.prototype.divide =
    function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/simplegrpc.SimpleService/Divide',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Divide,
            callback);
    };


/**
 * @param {!proto.simplegrpc.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simplegrpc.Response>}
 *     A native promise that resolves to the response
 */
proto.simplegrpc.SimpleServicePromiseClient.prototype.divide =
    function(request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/simplegrpc.SimpleService/Divide',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Divide);
    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simplegrpc.RepeatRequest,
 *   !proto.simplegrpc.RepeatResponse>}
 */
const methodDescriptor_SimpleService_Repeat = new grpc.web.MethodDescriptor(
    '/simplegrpc.SimpleService/Repeat',
    grpc.web.MethodType.SERVER_STREAMING,
    proto.simplegrpc.RepeatRequest,
    proto.simplegrpc.RepeatResponse,
    /**
     * @param {!proto.simplegrpc.RepeatRequest} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.RepeatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simplegrpc.RepeatRequest,
 *   !proto.simplegrpc.RepeatResponse>}
 */
const methodInfo_SimpleService_Repeat = new grpc.web.AbstractClientBase.MethodInfo(
    proto.simplegrpc.RepeatResponse,
    /**
     * @param {!proto.simplegrpc.RepeatRequest} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.RepeatResponse.deserializeBinary
);


/**
 * @param {!proto.simplegrpc.RepeatRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.RepeatResponse>}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServiceClient.prototype.repeat =
    function(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/simplegrpc.SimpleService/Repeat',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Repeat);
    };


/**
 * @param {!proto.simplegrpc.RepeatRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.RepeatResponse>}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServicePromiseClient.prototype.repeat =
    function(request, metadata) {
        return this.client_.serverStreaming(this.hostname_ +
            '/simplegrpc.SimpleService/Repeat',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Repeat);
    };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.simplegrpc.PingRequest,
 *   !proto.simplegrpc.PingResponse>}
 */
const methodDescriptor_SimpleService_Ping = new grpc.web.MethodDescriptor(
    '/simplegrpc.SimpleService/Ping',
    grpc.web.MethodType.UNARY,
    proto.simplegrpc.PingRequest,
    proto.simplegrpc.PingResponse,
    /**
     * @param {!proto.simplegrpc.PingRequest} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.PingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.simplegrpc.PingRequest,
 *   !proto.simplegrpc.PingResponse>}
 */
const methodInfo_SimpleService_Ping = new grpc.web.AbstractClientBase.MethodInfo(
    proto.simplegrpc.PingResponse,
    /**
     * @param {!proto.simplegrpc.PingRequest} request
     * @return {!Uint8Array}
     */
    function(request) {
        return request.serializeBinary();
    },
    proto.simplegrpc.PingResponse.deserializeBinary
);


/**
 * @param {!proto.simplegrpc.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.simplegrpc.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.simplegrpc.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.simplegrpc.SimpleServiceClient.prototype.ping =
    function(request, metadata, callback) {
        return this.client_.rpcCall(this.hostname_ +
            '/simplegrpc.SimpleService/Ping',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Ping,
            callback);
    };


/**
 * @param {!proto.simplegrpc.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.simplegrpc.PingResponse>}
 *     A native promise that resolves to the response
 */
proto.simplegrpc.SimpleServicePromiseClient.prototype.ping =
    function(request, metadata) {
        return this.client_.unaryCall(this.hostname_ +
            '/simplegrpc.SimpleService/Ping',
            request,
            metadata || {},
            methodDescriptor_SimpleService_Ping);
    };


module.exports = proto.simplegrpc;

