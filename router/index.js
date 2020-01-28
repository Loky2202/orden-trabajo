const express = require('express');


const router = express.Router();

const {body} = require('express-validator')

const controladorPrincipal = require('../controllers/principal.controllers')
const controladorCliente = require('../controllers/cliente.controllers');
const controladorManto = require('../controllers/manto.controllers');

router.get('/', controladorPrincipal.index)


/* Formulario cliente */
router.get('/formulario-cliente', controladorCliente.formularioCliente)

/* Crear Cliente */
router.post('/crear-cliente', controladorCliente.crearCliente)


/* Formulario para mantenimientos */
router.get('/formulario-mantenimiento', controladorManto.formularioManto)

/* Buscar placas */
router.post('/buscarPlacas/:placas', controladorPrincipal.buscarPlacas)

/* Buscador de placas campo layout */
router.get('/buscarPlacas', controladorPrincipal.buscarCampoplacas)


/* Listado de las placas */
router.get('/lista-Placas', controladorCliente.listadoPlacas)

/* Ver listado de mantenimientos */
router.get('/listado-manteminientos', controladorManto.listadoManto)

/* Ver formulario manto */
router.post('/agregar-mantenimiento/:id', controladorManto.agregarManto)

module.exports = function() {
    return router;
}