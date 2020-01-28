
/* Importar models cliente */
const Cliente = require('../models/Cliente');


exports.formularioCliente = (req, res) => {
    res.render('formularioCliente', {
        nombrepagina: 'Formulario para nuevo cliente'
    })
}


/* Guardar Cliente */
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


/* Ver Cliente */
exports.listadoPlacas = async (req, res, next) => {

    const resCliente = await Cliente.findAll()

    res.render('listadoPlacas', {
        nombrepagina: 'Listado de las placas',
        resCliente,
        cont: 0
    })
}