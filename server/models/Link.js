const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    urlCode: {
        type: String,
    },
    longUrl: {
        type: String,
    },
});

module.exports = mongoose.model('LinkModel', LinkSchema);
