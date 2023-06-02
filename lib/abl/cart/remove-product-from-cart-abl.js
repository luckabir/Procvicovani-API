const commerce = require("../../commerce");

exports.removeProductFromCart = async (cartId, productName, res) => {
    await commerce.cart.remove(cartId, productName);
    res.sendStatus(200);
};
