const mongoose = require('mongoose');
const config   = require('./bin/config.json');

require('./models/Link.js');

mongoose.Promise = global.Promise;

const setUpConnection = () => {
    const dbUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };

    console.log(`MongoDB config: ${JSON.stringify({ url: dbUrl, options })}`);
    mongoose.connect(dbUrl, options);
}

module.exports = {
    mongoose,
    setUpConnection
};
