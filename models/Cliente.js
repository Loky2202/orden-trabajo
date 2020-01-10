
const Sequileze =  require('sequelize');
const bd = require('../config/bd');


const Cliente =  bd.define('clientes', {
    id: {
        type: Sequileze.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    placas: {
        type: Sequileze.STRING(7),
        validate: {
            not: {
            args: ["[a-z]",'i'], 
            msg: 'solo numeros'
        }
        },
        unique: {
            args: true,
            msg: 'placa ya registrada'
        }
    }, 
    marca: {
        type: Sequileze.STRING(100)
    },
    modelo: {
        type: Sequileze.STRING(100)
    },
    year: {
        type: Sequileze.STRING(4),
        validate: {
            not: ["[a-z]",'i'],
        }
    },
    motor: {
        type: Sequileze.STRING(6)
    },
    cliente: {
        type: Sequileze.STRING(100),
        validate: {
            isAlphanumeric: true
        }
    },
    tipo: {
        type: Sequileze.STRING(100)
    },
    email : {
        type: Sequileze.STRING(100),
        validate: {
            isEmail: true
        }
    },
    telefono: {
        type: Sequileze.STRING(8),
        validate: {
            isNumeric: true, 
            notEmpty: true

        }
    }
})


module.exports = Cliente;