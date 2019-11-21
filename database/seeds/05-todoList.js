
exports.seed = function(knex) {
  return knex('todo_lists').insert([
    { task: "Send invitations", party_id: 1, completed: true },
    { task: "Go shopping", party_id: 2, completed: true },
    { task: "Reserve venue", party_id: 1, completed: false },
  ]);
};
