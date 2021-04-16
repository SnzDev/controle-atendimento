
exports.up = function(knex) {
  return knex.schema.createTable('clientes', function(table){
      table.increments('id').primary().notNullable();
      table.string('nome').notNullable();
      table.string('telefone',15);
      table.string('usuario').notNullable();
      table.string('cto').notNullable();
      table.string('porta');
      table.string('serial').notNullable();
      table.string('lat');
      table.string('long');
      table.integer('ativo').defaultTo(1);
      table.timestamps();
  })

};

exports.down = function(knex) {
    return knex.dropTable('clientes');
  
};
