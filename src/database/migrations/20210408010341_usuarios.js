
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table){
        table.increments('id').primary().notNullable();
        table.string('nome', 50).notNullable();

    })
};

exports.down = function (knex) {

};
