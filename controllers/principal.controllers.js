
/* Importar models/Cliente */
const Cliente = require('../models/Cliente')

/* Importar models/Manto */
const Manto = require('../models/Manto')



exports.index = (req, res) => {
    res.render('index', {
        nombrepagina: 'Inicio'
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



