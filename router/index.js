const express = require('express');


const router = express.Router();

const {body} = require('express-validator')

const controladorPrincipal = require('../controllers/principal.controllers')

router.get('/', controladorPrincipal.index)


/* Formulario cliente */
router.get('/formulario-cliente', controladorPrincipal.formularioCliente)

/* Crear Cliente */
router.post('/crear-cliente', controladorPrincipal.crearCliente)


/* Formulario para mantenimientos */
router.get('/formulario-mantenimiento', controladorPrincipal.formularioManto)

/* Buscar placas */
router.post('/buscarPlacas/:placas', controladorPrincipal.buscarPlacas)

/* Buscador de placas campo layout */
router.get('/buscarPlacas', controladorPrincipal.buscarCampoplacas)


/* Listado de las placas */
router.get('/lista-Placas', controladorPrincipal.listadoPlacas)

/* Ver listado de mantenimientos */
router.get('/listado-manteminientos', controladorPrincipal.listadoManto)

/* Ver formulario manto */
router.post('/agregar-mantenimiento/:id', controladorPrincipal.agregarManto)

module.exports = function() {
    return router;
}