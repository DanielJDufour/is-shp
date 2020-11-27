const getByte = require('get-byte');

module.exports = function ({ data, debug }) {
    if (debug) console.log("data:", data);
    
    const length = data.length !== undefined ? data.length : data.byteLength !== undefined ? data.byteLength : null;
    if (debug) console.log("length:", length);
    
    if (typeof data === "string") {
        const result = length > 4 && data.endsWith('.shp');
        return { result };
    } else {
        if (length < 8) {
            return { result: false };
        }
        
        const result = getByte(data, 0) === 0 &&
            getByte(data, 1) === 0 &&
            getByte(data, 2) === 39 &&
            getByte(data, 3) === 10 &&
            getByte(data, 4) === 0 &&
            getByte(data, 5) === 0 &&
            getByte(data, 6) === 0 &&
            getByte(data, 7) === 0 &&
            getByte(data, 8) === 0 &&
            getByte(data, 9) === 0 &&
            getByte(data, 10) === 0 &&
            getByte(data, 11) === 0;
        return { result };
    }
};