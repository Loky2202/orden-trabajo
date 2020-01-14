const express = require('express');
const router = require('./router/index')
const path = require('path')
const bodyParser = require('body-parser')
const {expressValidator} = require('express-validator')




/* Conexion a la bd */
const sequelize = require('./config/bd');
/* Modelos para creacion de las tablas */
require('./models/Cliente');
require('./models/Manto')
/* Conexion */
sequelize.sync()
  .then(() => {
    console.log('Conexion a la bd.');
  })
  .catch(err => {
    console.error('Hay un error: ', err);
  });



const app = express();


/* Habilitar bodyParser para recibir req.body */
app.use(bodyParser.urlencoded({ extended: true }))

/* /* validar express-validator 
app.use(expressValidator()) */

/* Carpeta estatica */
app.use(express.static('public'))



/* Activar pug en express */
app.set('view engine', 'pug')
/* Donde estaran las vistas */
app.set('views', path.join(__dirname, './views'))

/* Llamar las rutas */
app.use('/', router())


app.listen('3000', () => {
    console.log('Server on');
    
})