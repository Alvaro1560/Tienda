const express = require('express')
const server = express()
const routerProductos = require('./src/routes/index')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000

server.get('/', (req, res) => {
    res.send('API TIENDA')
})

server.use('/api', routerProductos)

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
