const shorteners = require('../services/shorteners');

module.exports = {
    encode: shorteners.encodeUrl,
    decode: shorteners.decodeUrl,
}
