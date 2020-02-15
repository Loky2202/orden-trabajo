/* CONEXION A LA BD */
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
/* const sequelize = new Sequelize('ORDEN', 'root', 'secret', {
  host: '0.0.0.0',
  dialect: 'mysql',
  port: 33060,
  define: {
      timestamps: false
  },
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});
 */
/* Opcion 2: Sqlite3 */
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'taller',
  define: {
    timestamps: false
},
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;


