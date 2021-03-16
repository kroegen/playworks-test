const express = require('express');
const shorteners = express.Router();

const { encode, decode } = require('../controllers/shorteners');

shorteners.get('/encode', encode);
shorteners.get('/*', decode);

module.exports = shorteners;
