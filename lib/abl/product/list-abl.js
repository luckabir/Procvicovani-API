const commerce = require("../../commerce");

exports.listProducts = async (req, res) => {
    const {criteria} = req.query;
    const products = await commerce.product.list({criteria});
    res.json(products);
};