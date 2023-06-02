const mongoose = require('mongoose')

const ProductCategorySchema = new mongoose.Schema({
    name: String,
    permalink: String,
    description: String,
    HTML: String,
    image: String
});

module.exports = mongoose.model("ProductCategory", ProductCategorySchema);