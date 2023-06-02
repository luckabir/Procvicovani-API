const mongoose = require('mongoose')

const TokenSchema = new mongoose.Schema({
    1: {
        id: String,
        object: String,
        created: Number,
        expires: Number,
        livemode: Boolean,
        reference: Number,
        checkout_token: String,
        customer: String,
        billing: String,
        shipping: String,
        order: String,
        line_items: [],
        subtotal: {
            raw: Number,
            formatted: String,
            formatted_with_symbol: String
          },
          total: {
            raw: Number,
            formatted: String,
            formatted_with_symbol: String
          },
          currency: String
        }
}) 

module.exports = mongoose.model("Token", TokenSchema);