
/* Importar models/cliente */
const Cliente = require('../models/Cliente')

const Manto = require('../models/Manto')



exports.index = (req, res) => {
    res.render('index', {
        nombrepagina: 'Inicio'
    })
}

exports.formularioCliente = (req, res) => {
    res.render('formularioCliente', {
        nombrepagina: 'Formulario para nuevo cliente'
    })
}


exports.crearCliente = async(req, res, next) => {
    
    const {placas, marca, modelo, year, motor, cliente, tipo, telefono, email} = req.body;

    const errorControl = []

    let cadena = placas;

    if (cadena.indexOf('-') === -1 || cadena.length > 7 || cadena.split('-').length > 2 ) {
        errorControl.push('necesita que tenga el siguiente formato el campo: 999-999');
    }

    if(errorControl.length) {
        res.render('formularioCliente', {
            nombrepagina: 'Formulario para nuevo Cliente',
            errorControl,
            resPlaca: req.body
            
        })
        return next()
    }
    
    try {
        await Cliente.create({
            placas,
            marca,
            modelo,
            year,
            motor,
            cliente,
            tipo,
            email,
            telefono
        })
        res.redirect('/formulario-cliente')
    } catch (error) {

        let resPlaca = req.body

        res.render('formularioCliente', {
            nombrepagina: 'Formulario para nuevo cliente',
            error: error.errors,
            resPlaca
        })
    }

}


exports.formularioManto = async (req, res, next) => {
    res.render('formularioManto', {
        nombrepagina: 'Formulario Mantemiento'
    })
}

exports.agregarManto = async (req, res, next) => {

    const id = req.params.id;
    const placaid = await Cliente.findOne({ where: { id: id } })
    
    /* console.table(req.body) */

    const {carburacion, carburacionObservaciones, motorCambioAceite, cambioAceiteObservaciones,motorBujia, bujiasObservaciones} = req.body

    console.info(carburacion, carburacionObservaciones, motorCambioAceite, cambioAceiteObservaciones,motorBujia, bujiasObservaciones)

    const mantenimiento = await Manto.create({
        carburacion,
        carburacionObservaciones, 
        motorCambioAceite, 
        cambioAceiteObservaciones,
        motorBujia, 
        bujiasObservaciones
    })

    
}

exports.buscarPlacas = async (req, res) => {

    const {placas} = req.query

    res.send(placas)
    
    console.log(placas);
    
}

exports.buscarCampoplacas = async (req, res, next) => {
    
    const { campoPlacas } = req.query;

    const resPlaca = await Cliente.findOne( { where: { placas: campoPlacas } })

    res.render('formularioManto', {
        nombrepagina: 'Formulario de nuevo mantenimiento',
        resPlaca
    })
}

exports.listadoPlacas = async (req, res, next) => {

    const resCliente = await Cliente.findAll()

    res.render('listadoPlacas', {
        nombrepagina: 'Listado de las placas',
        resCliente,
        cont: 0
    })
}

exports.listadoManto = async (req, res, next) => {

    /* Traer lista de mantenimientos para cada placa */

    const resManto = ['12/02/2019', '25/08/2019']

    res.render('verManto', {
        nombrepagina: 'Listado de mantenimientos',
        resManto,
        num: 0
    })
}