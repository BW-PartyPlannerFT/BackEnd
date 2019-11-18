
exports.seed = function(knex) {
  return knex('pictures').insert([
    {
      url: 'https://imgur.com/t23BL3j',
      party_id: 1
    },
    {
      url: 'https://imgur.com/FdENpL4',
      party_id: 2
    }
  ])
};
