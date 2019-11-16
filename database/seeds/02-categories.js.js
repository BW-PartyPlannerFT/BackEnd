
exports.seed = function(knex) {
  return knex('categories').insert([
    {category: 'Graduation Party'}, //1
    {category: 'Birthday Party'}, //2
    {category: 'Surprise Party'}, //3
    {category: 'Garden party'}, //4
    {category: 'Dinner party'}, //5
    {category: 'Cocktail party'}, //6
    {category: 'Tea Party'}, //7
    {category: 'Showers'} //8
  ]);
};
