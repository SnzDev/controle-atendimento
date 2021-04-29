const connection = require('../config/knex');

module.exports = {
    async index(req, res) {
        const response = await connection('atendimentos')
            .join('usuarios as usuario', 'id_usuario', '=', 'usuario.id')
            .join('clientes as cliente', 'id_cliente', '=', 'cliente.id')
            .join('tipo_os as tipo', 'id_tipo_os', '=', 'tipo.id')
            .select('atendimentos.id', 'atendimentos.servico_realizado', 'atendimentos.status', 'atendimentos.ativo', 'atendimentos.obs', 'atendimentos.created_on', 'atendimentos.updated_on',
                'cliente.nome', 'cliente.usuario', 'cliente.cto', 'cliente.porta',
                'tipo.nome as tipo'
            )
        res.json(response);
    },
    async store(req, res) {
        const { id_cliente, id_tipo_os, id_usuario, servico_realizado, obs } = req.body;
        const response = await connection('atendimentos').insert({ id_cliente, id_tipo_os, id_usuario, servico_realizado, obs });
        res.json(response);
    },
    async show(req, res) {
        const { id } = req.params;
        const response = await connection('atendimentos')
            .join('usuarios as usuario', 'id_usuario', '=', 'usuario.id')
            .join('clientes as cliente', 'id_cliente', '=', 'cliente.id')
            .join('tipo_os as tipo', 'id_tipo_os', '=', 'tipo.id')
            .select('atendimentos.id', 'atendimentos.servico_realizado', 'atendimentos.status', 'atendimentos.ativo', 'atendimentos.obs', 'atendimentos.created_on', 'atendimentos.updated_on',
                'cliente.nome', 'cliente.usuario', 'cliente.cto', 'cliente.porta',
                'tipo.nome as tipo'
            )
            .where('atendimentos.id', id);

        res.json(response);
    },
    async list(req, res) {
        const { id, data } = req.body;
        const response = await connection('atendimentos')
            .join('usuarios as usuario', 'id_usuario', '=', 'usuario.id')
            .join('clientes as cliente', 'id_cliente', '=', 'cliente.id')
            .join('tipo_os as tipo', 'id_tipo_os', '=', 'tipo.id')
            .select('atendimentos.id', 'atendimentos.servico_realizado', 'atendimentos.status', 'atendimentos.ativo', 'atendimentos.obs', 'atendimentos.created_on', 'atendimentos.updated_on',
                'cliente.nome', 'cliente.usuario', 'cliente.cto', 'cliente.porta',
                'tipo.nome as tipo'
            )
            .where('id_usuario', '=', id)
            .where('atendimentos.created_on', 'rlike', data)
        res.json(response);
    },
    async delete(req, res) {
        const { id } = req.params;
        const response = await connection('atendimentos').where({ id }).update({ ativo: 0 });
        res.json(response);
    },
    async update(req, res) {
        const { id } = req.params;
        const { servicoRealizado, obs } = req.body;
        const response = await connection('atendimentos').where({ id }).update({ status: 1, servico_realizado: servicoRealizado, obs: obs });
        res.json(response);
    },
}