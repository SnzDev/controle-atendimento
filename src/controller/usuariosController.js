const connection = require('../config/knex');
const bcrypt = require('bcrypt')

module.exports = {
    async index(req, res) {
        const response = await connection('usuarios')
            .orderBy('usuarios.nome')
            .join('cargos as cargo', 'usuarios.cargo_id', 'cargo.id')
            .select('usuarios.id', 'usuarios.nome', 'usuarios.telefone', 'usuarios.email', 'usuarios.senha', 'usuarios.ativo', 'cargo.nome as cargo_nome');
        res.json(response);
    },
    async store(req, res) {
        const { nome, telefone, email, cargo_id } = req.body;
        const senha = await bcrypt.hash(req.body.senha, 12);
        const response = await connection('usuarios').insert({ nome, telefone, email, senha, cargo_id });
        res.json(response);
    },
    async show(req, res) {
        const { id } = req.params;
        const response = await connection('usuarios')
            .orderBy('usuarios.nome')
            .join('cargos as cargo', 'usuarios.cargo_id', 'cargo.id')
            .select('usuarios.id', 'usuarios.nome', 'usuarios.telefone', 'usuarios.email', 'usuarios.senha', 'usuarios.ativo', 'cargo.nome as cargo_nome')
            .where({ id });
        res.json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        const response = await connection('usuarios').update({ ativo: 0 }).where({ id });
        res.json(response);
    },
}