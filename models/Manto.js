

const Sequilize = require('sequelize');
const bd = require('../config/bd');

const Cliente = require('../models/Cliente');

const Manto = bd.define('mantenimientos', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaCreacion: {
        type: Sequilize.DATE,
        defaultValue: Sequilize.NOW
    },
    fechaInicio: {
        type: Sequilize.STRING,
        defaultValue: 'Sequilize.NOW'
    },
    fechaFinal: {
        type: Sequilize.STRING,
        defaultValue: 'Sequilize.NOW'
    },
    carburacion: {
        type: Sequilize.STRING
    },
    carburacionObservaciones: {
        type: Sequilize.STRING
    },
    motorCambioAceite: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },
    cambioAceiteObservaciones: {
        type: Sequilize.STRING
    },
    motorBujia: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },
    bujiasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },
    motorFiltroAire: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },         
    motorFiltroObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },
    motorAjuste: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },            
    motorAjusteObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },     
    chasisCatarina: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },          
    catarinaObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    chasisCadena: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },           
    cadenaObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisFrenos: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },           
    frenosObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisManecillas: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },         
    manecillasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },      
    chasisRing: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },            
    ringObservaciones: {
        type: Sequilize.STRING,/* AQUI */
        defaultValue: ''
    },         
    chasisEspejos: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },           
    espejosObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    chasisLlantas: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },           
    llantasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    chasisPatas: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },            
    patasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisAmortiguadores: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },       
    amortiguadoresObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },    
    chasisCables: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },           
    cablesObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisEngreseGeneral: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },       
    engreseGeneralObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },  
    electricoBobinaArranque: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },     
    bobinaArranqueObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },   
    electricoFocoStop: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },        
    focoStopObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },      
    electricoFocoDireccionales: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },    
    focoDireccionalesObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },  
    electricoSealBean: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },        
    sealBeanObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },      
    electricoPito: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },           
    pitoObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },         
    electricoBateria: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },         
    bateriaObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    electricoFusible: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },         
    fusibleObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    electricoLuzTablero: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },       
    luzTableroObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },    
    electricoAmpolletaDelantera: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },   
    ampolletaDelanteraObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    }, 
    motorAmpolletaTrasera: {
        type: Sequilize.INTEGER(1),
        defaultValue: 2
    },      
    ampolletaTraseraObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },  
    nivelGas: {
        type: Sequilize.STRING(6),
        defaultValue: ''
    },            
    kilometros: {
        type: Sequilize.INTEGER(11),
        defaultValue: 0
    }

})

Manto.belongsTo(Cliente)


module.exports = Manto;