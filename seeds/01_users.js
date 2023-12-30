/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, username: 'Matthew', password: '123' },
    { id: 2, username: 'Mark', password: '456' },
    { id: 3, username: 'Luke', password: '789' }
  ])
};
