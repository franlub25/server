const Sequelize = require("sequelize");
const sequelize = require('../db');

const Pruebas = sequelize.define('pruebas', {
    nombre: {
        type: Sequelize.STRING
    },
    apellidos: {
        type: Sequelize.STRING
    },
});

module.exports = Pruebas;