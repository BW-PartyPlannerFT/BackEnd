const db = require('../database/db-config');

module.exports = {
    getParties,
    getPartyById,
    addParty,
    updateParty,
    deleteParty
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