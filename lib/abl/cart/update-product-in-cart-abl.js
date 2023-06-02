const commerce = require("../../commerce");

exports.updateProductInCart = async (req, res) => {
    const {productId, quantity} = req.body;
    await commerce.cart.update(productId, quantity);
    res.sendStatus(200);
};