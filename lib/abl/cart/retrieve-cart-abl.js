const commerce = require("../../commerce");

exports.retrieveCart = async (cartId, res) => {
    const cart = await commerce.cart.retrieve(cartId);
    res.json(cart);
};