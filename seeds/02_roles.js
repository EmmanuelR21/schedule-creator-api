/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    { id: 1, server_id: null, admin_id: null, user_id: 1 },
    { id: 2, server_id: null, admin_id: null, user_id: 2 },
    { id: 3, server_id: null, admin_id: null, user_id: 3 }
  ]);
};
