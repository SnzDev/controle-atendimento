const connection = require('../config/knex');
const bcrypt = require('bcrypt')

module.exports = {
    async index(req, res) {
        const response = await connection('usuarios').select();
        res.json(response);
    },
    async store(req, res) {
        const { nome, telefone, email, cargo_id } = req.body;
        const senha = await bcrypt.hash(req.body.senha, 12);
        const response = await connection('usuarios').insert({ nome, telefone, email, senha, cargo_id });
        res.json(response);
    },
    async show(req, res) {
        const { id } = req.body;
        const response = await connection('usuarios').select().where({ id });
    },
    async delete(req, res) {
        const { id } = req.body;
        const response = await connection('usuarios').update({ ativo: 0 }).where({ id });
        res.json(response);
    },
}