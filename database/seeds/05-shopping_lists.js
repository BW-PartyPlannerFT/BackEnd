
exports.seed = function(knex) {
  return knex('shopping_lists').insert([
    { item: "Cake", price: 55, party_id: 1, purchased: false },
    { item: "Balloon", price: 10, party_id: 2, purchased: false },
    { item: "Food", price: 200, party_id: 1, purchased: true }
  ]);
};
