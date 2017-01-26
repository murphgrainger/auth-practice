exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function(table) {
        table.increments();
        table.text('name');
        table.text('email').unique().notNullable();
        table.text('password').unique().notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};
