

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
    }

})

Manto.belongsTo(Cliente)


module.exports = Manto;