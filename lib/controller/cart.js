const express = require("express");
const router = express.Router();
const Cart = require('../models/Cart');

const commerce = require('../commerce');

const {retrieveCart} = require("../abl/cart/retrieve-cart-abl");
const {addProductToCart} = require("../abl/cart/add-product-to-cart-abl");
const {updateProductInCart} = require("../abl/cart/update-product-in-cart-abl");
const {removeProductFromCart} = require("../abl/cart/remove-product-from-cart-abl");
const {emptyCart} = require("../abl/cart/empty-cart-abl");

router.get('/:cartId', async (req, res) => {
    const cartId = req.params.cartId;
    console.log(cartId)
    await retrieveCart(cartId, res);
});

router.post('/:cartId/products',  async (req, res) => {
    const cartId = req.params.cartId;
    await addProductToCart(cartId, res);
});

router.patch('/:cartId/products/:productId', async (req, res) => {
    const cartId = req.params.cartId;
    const productId = req.params.productId;
    await updateProductInCart(cartId, productId, res);
});

router.delete('/:cartId/products/:productId', async (req, res) => {
    const cartId = req.params.cartId;
    const productId = req.params.productId;
    console.log(productId)
    await removeProductFromCart(cartId, productId, res);
  });

router.delete('/:cartId', async (req, res) => {
    const cartId = req.params.cartId;
    await emptyCart(cartId, res);
});



module.exports = router;