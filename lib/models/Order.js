const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema( {
    customer: {
      firstname: String,
      lastname: String
    },
    customer_reference: String,
    card: Number,
    shippingOptions: Number
  })

module.exports = mongoose.model("Order", OrderSchema);