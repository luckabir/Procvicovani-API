
const config = require('../../config/config');
const cartRetrieveDataSet = require('../../test/test-data/cart/retrieve.json');
const Cart = require('../models/Cart');
const Product = require('../models/Products');

const cart = {
    retrieve: async (cartId, res) => {
        try {
            const products = await Cart.findOne({ id: cartId });
            console.log(products)
            return products;
        } catch (err) {
            //res.status(500).json({ message: err.message });
        }},
    add: async (cartId, productId, quantity, res) => {

        try {
             const cart = new Cart({ //idk
                productId: product._id,
                quantity: quantity
              });
            const newCart = await cart.save();
            res.status(201).json(newCart);
        } catch (err) {
            res.status(400).json({message: err.message});

        }
    },
    update: async (cartId, productId, quantity, res) => {
       //- 
    },
    remove: async (cartId, productName, res) => {
        try{
        //idk

        await cart.save();
        }catch (err) {
            //res.status(500).json({message: err.message});
        }
    },
    empty: async (cartId, res) => {
        try {
            await Cart.deleteMany({ id: cartId }); //ono to jde, ale nejde cartId
        } catch (err) {
            res.status(500).json({message: err.message});
        } 
    }
};





module.exports = cart;