const express = require('express')
const routes = express.Router();

routes.get('/', async (req, res) => {
    return res.json('Tela inicial funcionando');
})

module.exports = routes;