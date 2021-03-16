const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const router = require('./routes');
const db = require('./mongoose');
const { appPort, baseUrl } = require('./utils/baseUrl');

const app = express();

// Set up connection of db
db.setUpConnection();

app.use(cors({
    origin: '*',
    methods: 'GET'
}));

app.use(logger('dev'));

app.use('/', router);

app.listen(appPort, () => {
    console.log(`Example app listening at ${baseUrl}`);
})
