const config = require('../../config/config');
const productDataSet = require('../../test/test-data/product/list.json');
const Product = require('../models/Products');

const product = {
    // TODO: Add basic implementation of criteria usage e.g. query, sortBy...
    list: async (/*{criteria}*/) => {
        try {
        if (config.USE_TEST_DATA) {
            //return productDataSet;
        }
        const products = await Product.find();
        return products;
      } catch (err) {
        res.status(500).json({message: err.message});
      }
    } 
};

module.exports = product;