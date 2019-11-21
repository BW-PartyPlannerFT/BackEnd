
exports.up = function(knex) {
    return knex.schema 
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 255)
          .notNullable()
          .unique();
        tbl.string('email', 255)
        tbl.string('password', 255)
          .notNullable();
    })
    .createTable('parties', tbl => {
        tbl.increments();
        tbl.string('party_name')
          .notNullable()
        tbl.string('host')
          .notNullable();
        tbl.string('guests')
          .notNullable();
        tbl.string('theme')
        tbl.date('date')
        tbl.integer('budget')
        tbl.string('category')
    })
    .createTable('pictures', tbl => {
        tbl.increments();
        tbl.string('url')
          .notNullable();
        tbl.integer('party_id')
          .unsigned()
          .references('id')
          .inTable('parties')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
    })
    .createTable('shopping_lists', tbl => {
        tbl.increments();
        tbl.string('item')
          .notNullable();
        tbl.integer('price')
          .notNullable();
        tbl.boolean('purchased')
          .defaultTo('false')
          .notNullable();
        tbl.integer('party_id')
          .unsigned()
          .references('id')
          .inTable('parties')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
    })
    .createTable('todo_lists', tbl => {
        tbl.increments();
        tbl.string('task')
          .notNullable();
        tbl.boolean('completed')
          .defaultTo('false')
          .notNullable();
        tbl.integer('party_id')
          .unsigned()
          .references('id')
          .inTable('parties')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('todo_lists')
    .dropTableIfExists('shopping_lists')
    .dropTableIfExists('pictures')
    .dropTableIfExists('parties')
    .dropTableIfExists('users')
};
