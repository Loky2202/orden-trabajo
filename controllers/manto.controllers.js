
/* Importar models/Manto */
const Manto = require('../models/Manto')
/* Importar models/Cliente */
const Cliente = require('../models/Cliente')


exports.listadoManto = async (req, res, next) => {

    /* Traer lista de mantenimientos para cada placa */

    const id = req.params.id;

    const resManto = await Manto.findAll({ where: { clienteId: id } })
    const resCliente = await Cliente.findOne({ where: { id } })

    res.render('verManto', {
        nombrepagina: 'Listado de mantenimientos',
        resManto,
        resCliente,
        num: 0
    })
}

exports.formularioManto = async (req, res, next) => {
    res.render('formularioManto', {
        nombrepagina: 'Formulario Mantemiento'
    })
}

exports.agregarManto = async (req, res, next) => {

    const clienteId = req.params.id;
    
    const cliente = await Cliente.findOne({ where: { id: clienteId } })
    
    
    

    const {
        carburacion,
        carburacionObservaciones, 
        motorCambioAceite, 
        cambioAceiteObservaciones,
        motorBujia, 
        bujiasObservaciones,
        motorFiltroAire,         
        motorFiltroObservaciones,
        motorAjuste,            
        motorAjusteObservaciones,     
        chasisCatarina,          
        catarinaObservaciones,       
        chasisCadena,           
        cadenaObservaciones,        
        chasisFrenos,           
        frenosObservaciones,        
        chasisManecillas,         
        manecillasObservaciones,      
        chasisRing,            
        ringObservaciones,         
        chasisEspejos,           
        espejosObservaciones,       
        chasisLlantas,           
        llantasObservaciones,       
        chasisPatas,            
        patasObservaciones,        
        chasisAmortiguadores,       
        amortiguadoresObservaciones,    
        chasisCables,           
        cablesObservaciones,        
        chasisEngreseGeneral,       
        engreseGeneralObservaciones,  
        electricoBobinaArranque,     
        bobinaArranqueObservaciones,   
        electricoFocoStop,        
        focoStopObservaciones,      
        electricoFocoDireccionales,    
        focoDireccionalesObservaciones,  
        electricoSealBean,        
        sealBeanObservaciones,      
        electricoPito,           
        pitoObservaciones,         
        electricoBateria,         
        bateriaObservaciones,       
        electricoFusible,         
        fusibleObservaciones,       
        electricoLuzTablero,       
        luzTableroObservaciones,    
        electricoAmpolletaDelantera,   
        ampolletaDelanteraObservaciones, 
        motorAmpolletaTrasera,      
        ampolletaTraseraObservaciones,  
        nivelGas,            
        kilometros
        
            } = req.body



    const mantenimiento = await Manto.create({
        carburacion,
        carburacionObservaciones, 
        motorCambioAceite, 
        cambioAceiteObservaciones,
        motorBujia, 
        bujiasObservaciones,
        motorFiltroAire,         
        motorFiltroObservaciones,
        motorAjuste,            
        motorAjusteObservaciones,     
        chasisCatarina,          
        catarinaObservaciones,       
        chasisCadena,           
        cadenaObservaciones,        
        chasisFrenos,           
        frenosObservaciones,        
        chasisManecillas,         
        manecillasObservaciones,      
        chasisRing,            
        ringObservaciones,         
        chasisEspejos,           
        espejosObservaciones,       
        chasisLlantas,           
        llantasObservaciones,       
        chasisPatas,            
        patasObservaciones,        
        chasisAmortiguadores,       
        amortiguadoresObservaciones,    
        chasisCables,           
        cablesObservaciones,        
        chasisEngreseGeneral,       
        engreseGeneralObservaciones,  
        electricoBobinaArranque,     
        bobinaArranqueObservaciones,   
        electricoFocoStop,        
        focoStopObservaciones,      
        electricoFocoDireccionales,    
        focoDireccionalesObservaciones,  
        electricoSealBean,        
        sealBeanObservaciones,      
        electricoPito,           
        pitoObservaciones,         
        electricoBateria,         
        bateriaObservaciones,       
        electricoFusible,         
        fusibleObservaciones,       
        electricoLuzTablero,       
        luzTableroObservaciones,    
        electricoAmpolletaDelantera,   
        ampolletaDelanteraObservaciones, 
        motorAmpolletaTrasera,      
        ampolletaTraseraObservaciones,  
        nivelGas,            
        kilometros,
        clienteId
    })

    res.redirect(`/buscarPlacas?campoPlacas=${cliente.placas}`)

    
}

exports.formularioEditarManto = async (req, res, next) => {

    const id =  req.params.id;
    const respuestaManto = await Manto.findOne({ where: { id } })

    res.render('formAgregarManto', {
        respuestaManto,
        nombrepagina: 'Editar Mantenimiento'
    })
}

exports.editarMantenimiento = async (req, res, next) => {

    /* id DEL MANTENIMIENTO */
    const id = req.params.id;
    
    const {
        carburacion,
        carburacionObservaciones, 
        motorCambioAceite, 
        cambioAceiteObservaciones,
        motorBujia, 
        bujiasObservaciones,
        motorFiltroAire,         
        motorFiltroObservaciones,
        motorAjuste,            
        motorAjusteObservaciones,     
        chasisCatarina,          
        catarinaObservaciones,       
        chasisCadena,           
        cadenaObservaciones,        
        chasisFrenos,           
        frenosObservaciones,        
        chasisManecillas,         
        manecillasObservaciones,      
        chasisRing,            
        ringObservaciones,         
        chasisEspejos,           
        espejosObservaciones,       
        chasisLlantas,           
        llantasObservaciones,       
        chasisPatas,            
        patasObservaciones,        
        chasisAmortiguadores,       
        amortiguadoresObservaciones,    
        chasisCables,           
        cablesObservaciones,        
        chasisEngreseGeneral,       
        engreseGeneralObservaciones,  
        electricoBobinaArranque,     
        bobinaArranqueObservaciones,   
        electricoFocoStop,        
        focoStopObservaciones,      
        electricoFocoDireccionales,    
        focoDireccionalesObservaciones,  
        electricoSealBean,        
        sealBeanObservaciones,      
        electricoPito,           
        pitoObservaciones,         
        electricoBateria,         
        bateriaObservaciones,       
        electricoFusible,         
        fusibleObservaciones,       
        electricoLuzTablero,       
        luzTableroObservaciones,    
        electricoAmpolletaDelantera,   
        ampolletaDelanteraObservaciones, 
        motorAmpolletaTrasera,      
        ampolletaTraseraObservaciones,  
        nivelGas,            
        kilometros
        
            } = req.body

        await Manto.update({
                carburacion,
                carburacionObservaciones, 
                motorCambioAceite: req.body.campo1, 
                cambioAceiteObservaciones,
                motorBujia: req.body.campo2, 
                bujiasObservaciones,
                motorFiltroAire: req.body.campo3,         
                motorFiltroObservaciones,
                motorAjuste: req.body.campo4,            
                motorAjusteObservaciones,     
                chasisCatarina: req.body.campo5,          
                catarinaObservaciones,       
                chasisCadena: req.body.campo6,           
                cadenaObservaciones,        
                chasisFrenos: req.body.campo7,           
                frenosObservaciones,        
                chasisManecillas: req.body.campo8,         
                manecillasObservaciones,      
                chasisRing: req.body.campo9,            
                ringObservaciones,         
                chasisEspejos: req.body.campo10,           
                espejosObservaciones,       
                chasisLlantas: req.body.campo11,           
                llantasObservaciones,       
                chasisPatas: req.body.campo12,            
                patasObservaciones,        
                chasisAmortiguadores: req.body.campo13,       
                amortiguadoresObservaciones,    
                chasisCables: req.body.campo14,           
                cablesObservaciones,        
                chasisEngreseGeneral: req.body.campo15,       
                engreseGeneralObservaciones,  
                electricoBobinaArranque: req.body.campo16,     
                bobinaArranqueObservaciones,   
                electricoFocoStop: req.body.campo17,        
                focoStopObservaciones,      
                electricoFocoDireccionales: req.body.campo18,    
                focoDireccionalesObservaciones,  
                electricoSealBean: req.body.campo19,        
                sealBeanObservaciones,      
                electricoPito: req.body.campo20,           
                pitoObservaciones,         
                electricoBateria: req.body.campo21,         
                bateriaObservaciones,       
                electricoFusible: req.body.campo22,
                fusibleObservaciones,       
                electricoLuzTablero: req.body.campo23,       
                luzTableroObservaciones,    
                electricoAmpolletaDelantera: req.body.campo24,   
                ampolletaDelanteraObservaciones, 
                motorAmpolletaTrasera: req.body.campo25,      
                ampolletaTraseraObservaciones,  
                nivelGas,            
                kilometros
            },
            {
                where: {
                    id: id
                }
            }
            )
        res.redirect('/')
}