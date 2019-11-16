const db = require('./parties-module');

module.exports = {
    validateParty,
    validatePartyId
}

function validateParty (req, res, next) {
    if(!req.body) res.status(400).json({ message: 'missing party data' })
    if(!req.body.party_name) res.status(400).json({ message: 'missing required Party name field' })
    if(!req.body.host) res.status(400).json({ message: 'missing required host field' })
    if(!req.body.guests) res.status(400).json({ message: 'missing required guests field' })
    if(!req.body.category_id) res.status(400).json({ message: 'missing required category id' })
    next()
};

function validatePartyId(req, res, next) {
    const id = req.params.id;
    db.getPartyById(Number(id))
    .then(party => {
        if(party) {
            req.party = party
            next()
        } else {
            res.status(400).json({ message: 'Invalid party id' })
        }
    })
    .catch(() => {
        res.status(500).json({ errorMessage: 'error' })
    })
}