const { encodeUrl, decodeUrl } = require('../services/shorteners');

module.exports = {
    encode: encodeUrl,
    decode: decodeUrl
}
