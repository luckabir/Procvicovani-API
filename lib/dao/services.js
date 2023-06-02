const config = require('../../config/config');
const countriesDataSet = require('../../test/test-data/services/countries');
const regionsDataSet = require('../../test/test-data/services/regions');

const services = {
    localeShippingCountries: async (checkoutToken) => {
        if (config.USE_TEST_DATA) {
            return countriesDataSet[checkoutToken] ?? {};
        }
        // TODO: Add Mongo implementation
    },
    localeListSubdivisions: async (countryCode) => {
        if (config.USE_TEST_DATA) {
            return regionsDataSet[countryCode] ?? {};
        }
        // TODO: Add Mongo implementation
    }
};

module.exports = services;