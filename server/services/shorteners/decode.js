const Link  = require('../../models/Link');
const { errors } = require('../../utils/errorMessages');

exports.decodeUrl = async(req, res, next) => {
    try {
        const urlCode = req.params[0];
        const link = await Link.findOne({ urlCode });

        if (!link) {
            await res.send({ status: 0, error: errors['link'] });
        }

        await res.redirect(301, `${link.longUrl}`);
    } catch (error) {
        await res.send({ status: 0, error: errors['server'] });
    }
}
