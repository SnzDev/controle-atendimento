
exports.up = function (knex) {
    return knex.schema.createTable('tipo_os', function (table) {
        table.increments('id').primary().notNullable();
        table.string('nome').notNullable();
        table.string('icone').notNullable();
        table.integer('ativo').defaultTo(1);
        table.timestamps();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tipo_os');
};
