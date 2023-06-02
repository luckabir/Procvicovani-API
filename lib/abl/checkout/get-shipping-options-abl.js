const {checkout} = require("../../commerce");
exports.getShippingOptions = async (req, res) => {
    const {checkoutToken} = req.query;
    const options = await checkout.getShippingOptions(checkoutToken);
    res.json(options);
};