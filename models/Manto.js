

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
        defaultValue: 0
    },
    cambioAceiteObservaciones: {
        type: Sequilize.STRING
    },
    motorBujia: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },
    bujiasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },
    motorFiltroAire: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },         
    motorFiltroObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },
    motorAjuste: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },            
    motorAjusteObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },     
    chasisCatarina: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },          
    catarinaObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    chasisCadena: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },           
    cadenaObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisFrenos: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },           
    frenosObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisManecillas: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },         
    manecillasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },      
    chasisRing: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },            
    ringObservaciones: {
        type: Sequilize.STRING,/* AQUI */
        defaultValue: ''
    },         
    chasisEspejos: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },           
    espejosObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    chasisLlantas: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },           
    llantasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    chasisPatas: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },            
    patasObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisAmortiguadores: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },       
    amortiguadoresObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },    
    chasisCables: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },           
    cablesObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },        
    chasisEngreseGeneral: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },       
    engreseGeneralObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },  
    electricoBobinaArranque: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },     
    bobinaArranqueObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },   
    electricoFocoStop: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },        
    focoStopObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },      
    electricoFocoDireccionales: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },    
    focoDireccionalesObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },  
    electricoSealBean: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },        
    sealBeanObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },      
    electricoPito: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },           
    pitoObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },         
    electricoBateria: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },         
    bateriaObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    electricoFusible: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },         
    fusibleObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },       
    electricoLuzTablero: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },       
    luzTableroObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    },    
    electricoAmpolletaDelantera: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
    },   
    ampolletaDelanteraObservaciones: {
        type: Sequilize.STRING,
        defaultValue: ''
    }, 
    motorAmpolletaTrasera: {
        type: Sequilize.INTEGER(1),
        defaultValue: 0
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