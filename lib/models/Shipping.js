const mongoose = require('mongoose')

const ShippingSchema = new mongoose.Schema({
    chkt_ABCDEFG123456: {
        shipping_options: [
          {
            id: String,
            description: String,
            price: {
              raw: Number,
              formatted: String,
              formatted_with_symbol: String
            }
          },
        ],
        selected_shipping_option: {
          id: String,
          description: String,
          price: {
            raw: Number,
            formatted: String,
            formatted_with_symbol: String
          }
        },
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

module.exports = mongoose.model("Shipping", ShippingSchema);