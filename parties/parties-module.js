const db = require('../database/db-config');

module.exports = {
    getParties,
    getPartyById,
    addParty,
    updateParty,
    deleteParty,
    getShopingList,
    getItemById,
    getShopingListById,
    addShopingList,
    updateItem,
    deleteItem,
};

function getParties() {
    return db('parties')
}

function getPartyById(id) {
    return db('parties').where({ id })
    .first();
}

function addParty(party) {
    return db('parties')
    .insert(party, 'id')
    .then(ids => {
        return getPartyById(ids[0]);
    })
}

function updateParty(id, changes) {
    return db('parties')
    .where({ id })
    .update(changes);
}

function deleteParty(id) {
    return db('parties')
    .where('id', id)
    .del();
}

function getShopingList(party_id) {
    return db('parties as P')
      .join('shopping_lists as S', 'P.id', 'S.party_id')
      .select('S.id','S.item', 'S.price')
      .where('S.party_id', party_id)
  }

  function getItemById(id) {
    return db('shopping_lists').where({ id }).first();
  }

  function getShopingListById(id) {
    return db('shopping_lists as S')
      .join('parties as P', 'S.id', 'P.id' )
      .select('S.id','S.item', 'S.price' )
      .where({'P.id': id}).first();
  }

  function addShopingList(list) {
    return db('shopping_lists')
      .insert(list, 'id')
      .then(ids => {
        return getShopingListById(ids[0]);
      })
  }
  function updateItem(id, changes) {
    return db('shopping_lists')
      .where({ id })
      .update(changes);
  }

  function deleteItem(id) {
    return db('shopping_lists')
      .where('id', id)
      .del();
  }