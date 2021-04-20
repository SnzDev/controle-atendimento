const connection = require('../config/knex');

module.exports = {
    async index(req, res) {
        const response = await connection('clientes')
        .select()
        .where({ativo:1});
        res.json(response);
    },
    async store(req, res) {
        const { nome, telefone, usuario, cto, porta, serial, lat, long } = req.body;
        const response = await connection('clientes').insert({ nome, usuario, cto, serial });
        res.json(response)
    },
    async show(req, res) {
        const { id } = req.params
        const response = await connection('clientes').where({ id })
        res.json(response);
    },
    async delete(req, res) {
        const { id } = req.params;

        const response = await connection('clientes').where({ id }).update({ativo:0})
        res.json(response);
    },
}