const connection = require('../config/knex');

module.exports = {
    async index(req, res) {
        const response = await connection('clientes').select();
        res.json(response);
    },
    async store(req, res) {
        res.json('teste');
    },
    async show(req, res) {
        res.json('teste');
    },
    async delete(req, res) {
        res.json('teste');
    },
}