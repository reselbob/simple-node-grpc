# Simple gRPC Client

## Autogening the Client Side

**Step 1:** Install npx on the global machine, you'll need it later

`npm install -g npx`

**Step 2:**  make the working directory to handle protoc download activity

`mkdir buildWorkingDir`

**Step 3:** navigate to the directory

`cd buildWorkingDir`

**Step 4:** get the protoc assets

```bash
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.4/protoc-3.11.4-linux-x86_64.zip
```

**Step 5:** unzip the file

`unzip protoc-3.11.4-linux-x86_64.zip`

**Step 6:** copy the `protoc` and include files in the host machine file file system

`cp -avr include/ /usr/local/`

`cp -avr ./bin/protoc /usr/local/bin/protoc`

**Step 7:** make `protoc` executable

`chmod +x /usr/local/bin/protoc`

**Step 8:** Get the `protoc-gen-grpc-web` plugin binary from the Internet

```bash
curl -OL https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64
```

**Step 9:** Copy it into the directory `/usr/local/bin/` with the name, `protoc-gen-grpc-web`

`cp protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web`

**Step 10:** Make `protoc-gen-grpc-web` executable

`chmod +x /usr/local/bin/protoc-gen-grpc-web`

**Step 11:** Bo back to the up to the build directory

`cd ..`

Get a visual confirmation as to where you are

`echo "The PWD is: $(pwd)"`

**Step 12:** Set the working directory to an env var, `SIMPLE_GRPC_WORK_DIR`

`export SIMPLE_GRPC_WORK_DIR=$(cd ../ && pwd)`

Visually confirm

`echo "The SIMPLE_GRPC_WORK_DIR is: ${SIMPLE_GRPC_WORK_DIR}"`

**Step 13:** Create the environmental variable that describes the directory where generated Javascript files will be stored

`export SIMPLE_GRPC_OUT_DIR="${SIMPLE_GRPC_WORK_DIR}/client/js"`

**Step 14:** Create the JS output directory, `SIMPLE_GRPC_OUT_DIR` if does not exist

`mkdir -p ${SIMPLE_GRPC_OUT_DIR}`

**Step 15:**  Create the environmental variable that describes the directory that contains .proto file

`export SIMPLE_GRPC_PROTO_DIR="${SIMPLE_GRPC_WORK_DIR}/proto"`

**Step 16:** visually confirm that the env vars are correct

`echo "The SIMPLE_GRPC_PROTO_DIR is: ${SIMPLE_GRPC_PROTO_DIR}"`

`echo "The SIMPLE_GRPC_OUT_DIR is: ${SIMPLE_GRPC_OUT_DIR}"`


**Step 17:** Generate the gRPC Client Code into `$SIMPLE_GRPC_OUT_DIR`

```bash
protoc --proto_path=$SIMPLE_GRPC_PROTO_DIR simple.proto --js_out=import_style=commonjs,binary:$SIMPLE_GRPC_OUT_DIR
```


**Step 18:**  Generate the JavaScript code to embedded in the client web-page into `$SIMPLE_GRPC_PROTO_DIR`

```bash
protoc -I=$SIMPLE_GRPC_PROTO_DIR simple.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$SIMPLE_GRPC_OUT_DIR
```
**Step 19:**  install the client packages

`cd .. && npm install`

## Running the Client Code

`TO BE PROVIDED`
 