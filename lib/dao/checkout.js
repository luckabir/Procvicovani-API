const config = require('../../config/config')
const checkoutTokenDataSet = require('../../test/test-data/checkout/token.json')
const checkoutShippingDataSet = require('../../test/test-data/checkout/shipping.json')

const checkout = {
    generateToken: async (cartId) => {
        if (config.USE_TEST_DATA) {
            return checkoutTokenDataSet[cartId] ?? {};
        }
        // TODO: Add Mongo implementation
    },
    getShippingOptions: async (checkoutToken) => {
        if (config.USE_TEST_DATA) {
            return checkoutShippingDataSet[checkoutToken] ?? {};
        }
        // TODO: Add Mongo implementation
    }
};

module.exports = checkout;