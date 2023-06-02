const express = require("express");
const router = express.Router();

const {getLocaleShippingCountries} = require("../abl/services/locale-shipping-countries-abl");
const {listSubdivisions} = require("../abl/services/locale-list-subdivisions-abl");

router.get('/locale-shipping-countries/:checkoutToken', async (req, res) => {
    await getLocaleShippingCountries(req, res);
});

router.get('/locale-list-subdivisions/:countryCode', async (req, res) => {
    await listSubdivisions(req, res);
});

module.exports = router;