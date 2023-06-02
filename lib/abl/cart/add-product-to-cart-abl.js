const commerce = require("../../commerce");

exports.addProductToCart = async (req, res) => {
    const {productId, quantity} = req.body;
    await commerce.cart.add(productId, quantity);
    res.sendStatus(200);
};