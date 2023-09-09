const express = require('express');
const app = express();

//Importar conexion mongoDB
const archivoDB = require('./conexion')


app.get('/', (req, res) =>{
    res.end('Bienvenidos al sevidor de backend Node.js Corriendo...')
})

app.listen(5000, function(){
    console.log('Servidor corriendo de manera correcta')
})