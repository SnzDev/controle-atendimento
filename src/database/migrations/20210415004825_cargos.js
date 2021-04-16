
exports.up = function (knex) {
    return knex.schema.createTable('cargos', function (table) {
        table.increments('id').primary().notNullable();
        table.string('nome').notNullable();
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('cargos');

};
