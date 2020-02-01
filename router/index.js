const express = require('express');


const router = express.Router();

const {body} = require('express-validator')

const controladorPrincipal = require('../controllers/principal.controllers')
const controladorCliente = require('../controllers/cliente.controllers');
const controladorManto = require('../controllers/manto.controllers');


module.exports = function() {

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
    router.get('/listado-manteminientos/:id', controladorManto.listadoManto)

    /* Ver formulario manto */
    router.post('/agregar-mantenimiento/:id', controladorManto.agregarManto)

    /* Formulario Editar Cliente */
    router.get('/editar-cliente/:id', controladorCliente.formularioEditarCliente)
    /* Editar Cliente */
    router.post('/editar-cliente/:id', controladorCliente.editarCliente)
    /* Eliminar Cliente */
    router.delete('/cliente/:id', controladorCliente.eliminarCliente)

    return router;
}