const { nanoid } = require('nanoid');
const validUrl = require('valid-url');
const Link  = require('../../models/Link');
const { baseUrl } = require('../../utils/baseUrl');
const { errors } = require('../../utils/errorMessages');

exports.encodeUrl = async(req, res, next) => {
    const { query: { url } } = req;

    if (!url || !validUrl.isUri(url)) {
        return await res.send({ status: 0, error: errors['invalidUrl'] });
    }

    try {
        const link = await Link.findOne({ longUrl: url });
        const urlCode = link ? link.urlCode : nanoid(8);

        if (!link) await (new Link({ urlCode, longUrl: url })).save();

        const shortUrl = `${baseUrl}/${urlCode}`;

        await res.send({ status: 1, shortUrl });
    } catch (error) {
        await res.send({ status: 0, error: errors['server'] });
    }
};
