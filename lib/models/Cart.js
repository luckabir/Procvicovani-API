const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({

    id: Number,
    total_items: Number,
    line_items: [{
        name: String,
        quantity: Number,
        cart:{
            subtotal:{
                formatted_with_symbol: String
            },
            linetotal:{
                formatted_with_symbol: String
            }
        }
      }]
  });

  module.exports = mongoose.model("Cart", CartSchema);