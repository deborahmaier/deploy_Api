const express = require("express");
const productsRouter = require("./routes/products");
const errorHandler = require("./middlewares/errorHandler");
const { handlebars } = require("hbs");
const path = require('path');
const userRouter = require('./router/userRouter');

require("dotenv").config();

const app = express();
app.use(express.json())

//Configuramos el motor de plantillas de Handlebars
app.set('view engine', 'hbs');

//Seteamos el path del directorio de vistas
app.set('views', path.join(__dirname, '/views'));

//Seteamos el path del directorio de los partials
handlebars.registerPartial(path.join(__dirname, '/views/partials'));

//app.use('/user', require('./routes/userRouter'));
app.use('/', userRouter);

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