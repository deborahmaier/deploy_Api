const express = require("express");
const productsRouter = require("./routes/products");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API de productos");
});


app.get("/health", (req, res) => {
    res.send("OK");
});


app.use("/api/products", productsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API de productos escuchando en el puerto ${PORT}`);
});

module.exports = app;