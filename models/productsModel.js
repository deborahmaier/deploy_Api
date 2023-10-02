const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        price: String,
    },
    { collection: "products" }
    );

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;