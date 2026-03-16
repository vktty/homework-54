import dotenv from 'dotenv/config';
import validator from 'validator';

// 1
const isDebugMode = () => {
    const NODE_ENV = process.env.NODE_ENV;
    const isEnvDebug = NODE_ENV === 'development';

    console.log(NODE_ENV);
    return `Is NODE_ENV === 'development': ${isEnvDebug}`;
};

console.log(isDebugMode());

// 2
function encodeToBase64(...args) {
    console.log(`Received args: ${args}`);
    try {
        const buffFromString = Buffer.from(args.join(':'), 'utf-8');
        return buffFromString.toString('base64');
    } catch (error) {
        console.log(`Error while coding to base64: ${error.message}`);
    }
}
function encodeToHex(...args) {
    console.log(`Received args: ${args}`);
    try {
        const buffFromString = Buffer.from(args.join(':'), 'utf-8');
        return buffFromString.toString('hex');
    } catch (error) {
        console.log(`Error while conding to hex: ${error.message}`);
    }
}

function decodeFromBase64(base64String) {
    console.log(`Received args: ${base64String}`);
    try {
        const buffFromBase64 = Buffer.from(base64String, 'base64');
        return buffFromBase64.toString('utf-8');
    } catch (error) {
        console.log(`Error while decoding from base64: ${error.message}`);
    }
}

function decodeFromHex(hexString) {
    console.log(`Received args: ${hexString}`);
    try {
        const buffFromHex = Buffer.from(hexString, 'hex');
        return buffFromHex.toString('utf-8');
    } catch (error) {
        console.log(`Error while decoding from hex: ${error.message}`);
    }
}

const base64Encoded = encodeToBase64('john@email.com', '123', 'extraData');
console.log('Base64 Encoded:', base64Encoded);

const hexEncoded = encodeToHex('john@email.com', '123', 'extraData');
console.log('Hex Encoded:', hexEncoded);

const base64Decoded = decodeFromBase64(base64Encoded);
console.log('Base64 Decoded:', base64Decoded);

const hexDecoded = decodeFromHex(hexEncoded);
console.log('Hex Decoded:', hexDecoded);

// 3
function safeDecodeFromBase64(base64String) {
    console.log(`Received args: ${base64String}`);

    try {
        if (validator.isBase64(base64String)) {
            const buffFromBase64 = Buffer.from(base64String, 'base64');
            return buffFromBase64.toString('utf-8');
        } else {
            console.log('Invalid base64 string');
        }
    } catch (error) {
        console.log(`Error while decoding from base64: ${error.message}`);
    }
}

function safeDecodeFromHex(hexString) {
    console.log(`Received args: ${hexString}`);
    try {
        if (validator.isHexadecimal(hexString)) {
            const buffFromHex = Buffer.from(hexString, 'hex');
            return buffFromHex.toString('utf-8');
        } else {
            console.log('Invalid hex string');
        }
    } catch (error) {
        console.log(`Error while decoding from hex: ${error.message}`);
    }
}

const safeBase64Decoded = safeDecodeFromBase64(base64Encoded);
console.log('Safe Base64 Decoded:', safeBase64Decoded);

const safeHexDecoded = safeDecodeFromHex(hexEncoded);
console.log('Safe Hex Decoded:', safeHexDecoded);
