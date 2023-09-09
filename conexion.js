const moongose = require('mongoose')
moongose.connect('mongodb://127.0.0.1:27017/crudmearn');


const objectobd = moongose.connection;

objectobd.on('connected', ()=>{console.log('Conexion correcta a MongoDB')})
objectobd.on('error', ()=> {console.log('Error en la conecxion a MongoDB')})

module.exports = moongose