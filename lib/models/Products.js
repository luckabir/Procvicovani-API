const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
name: String,
is_active: Boolean,
quantity: Number,
description: String,
HTML: String,
price: Number,
product: {
    price: {
        formatted_with_symbol: String,
    },
    line_total: {
        formatted_with_symbol: String
    }
},
permalink: String,
images: [{
    product: {
        media: {
            source: String
        }
    }
}],
categories: [String],
related_products: [String]
}) 

module.exports = mongoose.model("Product", ProductSchema);