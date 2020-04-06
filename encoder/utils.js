const convertBase = (baseFrom, baseTo) => {
    return function (num) {
        return parseInt(num, baseFrom).toString(baseTo);
    };
}
convertBase.hex2bin = convertBase(16, 2);


const convertToBytesInFullBinary = (buf) => {
    const str = convertBase.hex2bin(buf.toString('hex'));
    const byteCount = buf.length;
    const binCount = str.length;
    const expectedBinCount = byteCount * 8;
    const offset = expectedBinCount - binCount;
    if(offset !== 0){
        //we need to add the missing zeros
        return '0'.repeat(offset) + str;
    }
    return str;
}

module.exports = {convertToBytesInFullBinary};