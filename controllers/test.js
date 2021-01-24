'use strict'
const Pruebas = require('../models/prueba');

var controller = {
    hola: function(req, res){
        console.log('test')
        return res.status(200).send({
            msg: "test",
            status: 'OK'
        })
    },

    new: function(req, res){
        const body = req.body;
        Pruebas.create(body)
        .then(prueba => {
            return res.status(200).send({
                status: "OK",
                prueba: prueba
            });
        })
        .catch(err => {
            return res.status(200).send({
                status: "ERR[1]",
                msg: "Ocurrio un error mientras se insertaban los datos",
            });
        })
    },

    getall: function (req, res) {
        Pruebas.findAll()
        .then(pruebas => {
            return res.status(200).send({
                pruebas
            })
        })
        .catch(err => {
            return res.status(200).send({
                msg: "Ocurrio un error inesperado en el servidor",
                err
            })
        })
    }
}

module.exports = controller