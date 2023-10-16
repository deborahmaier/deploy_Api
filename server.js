const app = require('./app');
const PORT = process.env.PORT || 3000;

//Ejecutamos con una llamada a la conexión a la database con mongoose
require('./dataBase/conexion');

const server = app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

server.on('Error: ', (error) => {
    console.log(`Server is not running because of ${error}`);
});