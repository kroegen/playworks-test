const express = require('express');
const router = express.Router();

const shorteners = require('./shorteners');

router.use('/', shorteners);

module.exports = router;
