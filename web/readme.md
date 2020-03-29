# Simple gRPC Client

## Creating the Client
**Step 1:** Create a working directory

`mkdir simpleGrpcApp`

**Step 2:** Navigate to the working directory

`cd simpleGrpcApp`


**Step 3:** Download the Javascript code generator for Node.js Linux.

```
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.4/protoc-3.11.4-linux-x86_64.zip
```
**Step 4:** Unzip the file

`unzip protoc-3.11.4-linux-x86_64.zip`

**Step 5:** Copy the `include` directory to `/usr/local`

`cp -avr ./include /usr/local/include`

**Step 6:** Code gen the client in CommonJs format

`./bin/protoc --js_out=import_style=commonjs,binary:. ./proto/simple.proto`