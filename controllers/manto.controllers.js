
/* Importar models/Manto */
const Manto = require('../models/Manto')
/* Importar models/Cliente */
const Cliente = require('../models/Cliente')


exports.listadoManto = async (req, res, next) => {

    /* Traer lista de mantenimientos para cada placa */

    const resManto = ['12/02/2019', '25/08/2019']

    res.render('verManto', {
        nombrepagina: 'Listado de mantenimientos',
        resManto,
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

    console.table(req.body)


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