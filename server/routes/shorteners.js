const express = require('express');
const shorteners = express.Router();

const shortenersController = require('../controllers/shorteners');

console.log(shortenersController);

shorteners.get('/encode', shortenersController.encode);
shorteners.get('/*', shortenersController.decode);

module.exports = shorteners;
