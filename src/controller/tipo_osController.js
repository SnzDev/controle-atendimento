const connection = require('../config/knex');

module.exports = {
    async index(req, res) {
        const response = await connection('tipo_os').select().where({ ativo: 1 });
        res.json(response)
    },
    async store(req, res) {
        const { nome, icone } = req.body;
        const response = await connection('tipo_os').insert({ nome, icone });
        res.json(response);
    },
    async show(req, res) {
        const { id } = req.params;
        const response = await connection('tipo_os').select().where({ id });
        res.json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        const response = await connection('tipo_os').update({ ativo: 0 }).where({ id });
        res.json(response);
    },
}