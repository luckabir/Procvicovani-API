const express = require("express");
const router = express.Router();

const {generateCheckoutToken} = require('../abl/checkout/generate-token-abl');
const {getShippingOptions} = require('../abl/checkout/get-shipping-options-abl')

router.get('/generate-token/:cartId', async (req, res) => {
    await generateCheckoutToken(req, res);
});

router.get('shipping-options/:checkoutToken', async (req, res) => {
    await getShippingOptions(req, res);
});

module.exports = router;