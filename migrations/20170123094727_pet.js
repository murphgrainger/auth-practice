exports.up = function(knex, Promise) {
    return knex.schema.createTable('pet', function(table) {
        table.increments();
        table.text('name').notNullable();
        table.text('breed').notNullable();
        table.integer('age').notNullable();
        table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pet');
};
