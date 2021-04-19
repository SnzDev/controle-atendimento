
exports.up = function (knex) {
    return knex.schema.createTable('cargos', function (table) {
        table.increments('id').primary().notNullable();
        table.string('nome').notNullable();
        table.dateTime('created_on')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

        table.dateTime('updated_on')
            .notNullable()
            .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cargos');

};
