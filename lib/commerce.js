const product = require('./dao/product');
const cart = require('./dao/cart');
const services = require('./dao/services');
const checkout = require('./dao/checkout');

const commerce = {
    product,
    cart,
    services,
    checkout
}

module.exports = commerce;
