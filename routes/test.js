'use strict'

const express = require('express');
const router = express.Router();
const testController = require('../controllers/test');

router.get(
    '/test/hola', 
    testController.hola
);

router.get(
    '/test/getall', 
    testController.getall
);

router.post(
    '/test/new', 
    testController.new
);

module.exports = router;