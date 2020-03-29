# Simple gRPC Client

## Preparing the Client Cide

**Step 1:** Install the `protoc` compiler for Javascript on the local machine

`mkdir jsProto`

`cd jsProto`

`curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.4/protoc-3.11.4-linux-x86_64.zip`

`unzip protoc-3.11.4-linux-x86_64.zip`

**Step 2:** Integrate the `protoc` compiler files in the local Linux file system

`cp -avr ./include /usr/local/include`

`cp -avr ./bin/protoc /usr/local/bin/protoc`

`chmod +x /usr/local/bin/protoc`

**Step 3:** Go back to the `HOME` root

`cd ~`

**Step 4:** Install the `protoc-gen-grpc-web` plugin into the local machine

`curl -OL https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64`

`cp protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web`

`chmod +x /usr/local/bin/protoc-gen-grpc-web`


 **Step 5:** Create a output directory Javascript files to be generated

`mkdir genOut`

 **Step 6:** Create the environmental variable for the directory where generated Javascript files will be stored 

`export OUT_DIR=~/genOut`

 **Step 7:** Get the gRPC API project from GitHub
 
 `git clone https://github.com/reselbob/simple-node-grpc.git`
 
 **Step 8:** Create the environmental variable for the directory that contains `.proto` file
 
`export PROTO_DIR=~/simple-node-grpc/proto`
 

 **Step 9:** Generate the gRPC Client Code into `$OUT_DIR`
 
 `protoc --proto_path=$PROTO_DIR simple.proto --js_out=import_style=commonjs,binary:$OUT_DIR`
 
 **Step 10:** Generate the JavaScript code to embedded in the client web-page 
 
`protoc -I=$PROTO_DIR simple.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR`

## Running the Client Code
 