const express = require("express");
const router = express.Router();

const {listProducts} = require("../abl/product/list-abl");

router.get('/', async (req, res) => {
    await listProducts(req, res);
});

module.exports = router;