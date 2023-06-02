const commerce = require("../../commerce");
exports.generateCheckoutToken = async (req, res) => {
    const {cartId} = req.params;
    const token = await commerce.checkout.generateToken(cartId);
    res.json({token})
};
