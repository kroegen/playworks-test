const config = require('../bin/config.json');

const baseUrl = `http://${config.baseUrl}:${config.appPort}`;

module.exports = { baseUrl, appPort: config.appPort };
