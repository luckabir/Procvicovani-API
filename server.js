require('dotenv').config();
const express = require('express');

const config = require('./config/config');

const productsRouter = require('./lib/controller/product');
const cartRouter = require('./lib/controller/cart');
const servicesRouter = require('./lib/controller/services');
const checkoutRouter = require('./lib/controller/checkout');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('pripojeno k db'));

// Middleware
app.use(express.json());

// Routes
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/services', servicesRouter);
app.use('/checkout', checkoutRouter);

// Error handling
app.get('/', (req, res) => {
    throw new Error('BROKEN');
})

// Start server
app.listen(config.APP_PORT, () => {
    console.log(`Server listening on port ${config.APP_PORT}`);
});
