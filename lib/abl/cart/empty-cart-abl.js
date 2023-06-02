const commerce = require("../../commerce");

exports.emptyCart = async (cartId, res) => {
    await commerce.cart.empty(cartId);
    res.sendStatus(200);
};