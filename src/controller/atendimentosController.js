const connection = require('../config/knex');

module.exports = {
    async index(req, res) {
        const response = await connection('atendimentos').select();
        res.json(response);
    },
    async store(req, res) {
        const { id_cliente, id_tipo_os, id_usuario, servico_realizado, obs } = req.body;
        const response = await connection('atendimentos').insert({ id_cliente, id_tipo_os, id_usuario, servico_realizado, obs });
        res.json(response)
    },
    async show(req, res) {
        const { id } = req.params;
        const response = await connection('atendimentos').select().where({ id });
        res.json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        const response = await connection('atendimentos').where({ id }).update({ ativo: 0 });
        res.json(response);
    },
}