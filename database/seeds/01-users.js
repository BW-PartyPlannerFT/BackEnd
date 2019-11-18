
exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'Ava',
      password: 'ava',
      email: 'ava@lambdaschool.com'
    },
    {
      username: 'Eve',
      password: 'eve',
      email: 'eve@lambdaschool.com'
    }
  ]);
};
