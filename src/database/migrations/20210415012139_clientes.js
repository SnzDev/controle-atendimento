
exports.up = function (knex) {
  return knex.schema.createTable('clientes', function (table) {
    table.increments('id').primary().notNullable();
    table.string('nome').notNullable();
    table.string('telefone', 15);
    table.string('usuario').unique().notNullable();
    table.string('cto').notNullable();
    table.string('porta');
    table.string('serial').notNullable();
    table.string('lat');
    table.string('long');
    table.integer('ativo').defaultTo(1);
    table.dateTime('created_on')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

    table.dateTime('updated_on')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable('clientes');

};
