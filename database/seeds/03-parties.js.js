
exports.seed = function(knex) {
  return knex('parties').insert([
    {
      party_name: "Brenda's dinner party",
      host: 'Hellen',
      guests: 30,
      theme: 'Rustic BBQ Dinner',
      date: '12/12/2019',
      budget: 1000,
      category_id: 5
    },
    {
      party_name: "June's baby shower",
      host: 'June',
      guests: 20,
      theme: 'Santa Baby',
      date: '25/12/2019',
      budget: 700,
      category_id: 8
    }
  ]);
};
