const commerce = require("../../commerce");

exports.getLocaleShippingCountries = async (req, res) => {
    const {checkoutToken} = req.query;
    const countries = await commerce.services.localeShippingCountries(checkoutToken);
    res.json(countries);
};