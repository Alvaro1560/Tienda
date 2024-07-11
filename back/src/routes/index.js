const express = require('express')
const roouter = express.Router()
const Productos = require('../controller/index')


//roouter.post('/productos' )
roouter.get('/productos', Productos.getAll )


module.exports = roouter