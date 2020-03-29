#!/usr/bin/env bash

#make the working directory to handle protoc download activity
mkdir buildWorkingDir
#navigate to the directory
cd buildWorkingDir
#get the protoc assets
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.4/protoc-3.11.4-linux-x86_64.zip
#unzip the file
unzip protoc-3.11.4-linux-x86_64.zip
#copy the protoc and include files in the host machine file file system
cp -avr include/ /usr/local/
cp -avr ./bin/protoc /usr/local/bin/protoc
#make protoc executable
chmod +x /usr/local/bin/protoc

#get the protoc-gen-grpc-web plugin binary from the Internet
curl -OL https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64
#copy it into the directory /usr/local/bin/ with the name, protoc-gen-grpc-web
cp protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
#make protoc-gen-grpc-web executable
chmod +x /usr/local/bin/protoc-gen-grpc-web

#go back to the up to the build directory
cd ..

echo "The PWD is: $(pwd)"

#set the working directory to an env var
export SIMPLE_GRPC_WORK_DIR=$(cd ../ && pwd)
echo "The SIMPLE_GRPC_WORK_DIR is: ${SIMPLE_GRPC_WORK_DIR}"


#create the environmental variable that describes the directory where generated Javascript files will be stored
export SIMPLE_GRPC_OUT_DIR="${SIMPLE_GRPC_WORK_DIR}/client/js"
#create the JS output directory, if does not exist
mkdir -p ${SIMPLE_GRPC_OUT_DIR}

#create the environmental variable that describes the directory that contains .proto file
export SIMPLE_GRPC_PROTO_DIR="${SIMPLE_GRPC_WORK_DIR}/proto"

## visually confirm that the env var as correct
echo "The SIMPLE_GRPC_PROTO_DIR is: ${SIMPLE_GRPC_PROTO_DIR}"
echo "The SIMPLE_GRPC_OUT_DIR is: ${SIMPLE_GRPC_OUT_DIR}"



#generate the gRPC Client Code into $SIMPLE_GRPC_OUT_DIR
protoc --proto_path=$SIMPLE_GRPC_PROTO_DIR simple.proto --js_out=import_style=commonjs,binary:$SIMPLE_GRPC_OUT_DIR

#generate the JavaScript code to embedded in the client web-page
protoc -I=$SIMPLE_GRPC_PROTO_DIR simple.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$SIMPLE_GRPC_OUT_DIR