/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('bankslips', function(table) {
    table.increments('id').primary();
    table.date('due_date').notNullable();
    table.date('payment_date');
    table.integer('total_in_cents').notNullable();
    table.string('customer', 255).notNullable();
    table.string('status', 20).notNullable().defaultTo('PENDING');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bankslips');
};
