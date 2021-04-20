const connection = require('../config/knex');

module.exports = {
    async index(req, res) {
        const response = await connection('cargos').where({ ativo: 1 });
        res.json(response);
    },
    async store(req, res) {
        const { nome } = req.body;
        const response = await connection('cargos').insert({ nome });
        res.json(response);
    },
    async show(req, res) {
        const { id } = req.params;
        const response = await connection('cargos').select().where({ id });
        res.json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        const response = await connection('cargos').where({ id }).update({ ativo: 0 });
        res.json(response);
    },
}