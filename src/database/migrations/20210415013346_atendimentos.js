
exports.up = function (knex) {
    return knex.schema.createTable('atendimentos', function (table) {
        table.increments('id').primary().notNullable();
        table.integer('id_cliente').unsigned().notNullable();
        table.integer('id_tipo_os').unsigned().notNullable();
        table.integer('id_usuario').unsigned().notNullable();
        table.string('servico_realizado');
        table.string('obs');
        table.integer('status').defaultTo(0);


        table.foreign('id_usuario').references('usuarios.id');
        table.foreign('id_tipo_os').references('tipo_os.id')
        table.foreign('id_cliente').references('clientes.id');
        table.dateTime('created_on')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

        table.dateTime('updated_on')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('atendimentos');
};
