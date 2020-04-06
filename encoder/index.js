const protobuf = require('protocol-buffers');
const fs = require('fs');
const colors = require('colors/safe');
const {convertToBytesInFullBinary} = require('./utils');

const PROTO_PATH = process.cwd() + '/proto/simple.proto';

// pass a proto file as a buffer/string or pass a parsed protobuf-schema object
const messages = protobuf(fs.readFileSync(PROTO_PATH));

const getRedString = (str)=> {
    return `\x1b[31m${str}\x1b[89m`
}

const getBlueString = (str)=> {
    return `\x1b[34m${str}\x1b[89m`
}

const formatOutputInColor = (str) =>{
    let i = 0; let j= 0;
    let result = '';
    const chrs = str.split('');
    let currentColor = 'blue';
    let s = ''
    for (j = 0; j < chrs.length; j++) {
        s = s + chrs[j]; i++;
        if(i === 8){
            if(currentColor === 'red'){
                result = result + getRedString(s);
            }
            else {
                result = result + getBlueString(s);
            }
            currentColor = currentColor === 'red' ? 'blue' : 'red';
            i = 0
            s = '';
        }
    }
    return result;
};

const buf = messages.Dummy.encode({
    a: 14041784,
});

const str = convertToBytesInFullBinary(buf);
const result = formatOutputInColor(str);
console.log(result);



