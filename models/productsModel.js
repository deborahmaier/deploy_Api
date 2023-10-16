const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const ProductSchema = new Schema(
    {
        name: String,
        price: String,
    },
    { collection: "products" }
    );

module.exports = mongoose.model('Product', ProductSchema);
