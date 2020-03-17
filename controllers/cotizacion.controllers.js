

exports.index = (req, res, next) => {
    res.render('cotizacion', {
        nombrepagina: 'Cotizaciones'
    })
}

exports.nueva =(req, res, next) => {
    res.render('formularioCotizacion', {
        nombrepagina: 'Nueva Cotizacion'
    })
}

exports.producto = (req, res, next) => {
    
    res.send('exito')

}