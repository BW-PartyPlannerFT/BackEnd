const express = require('express');
const router = express.Router();
const db = require('./parties-module');

const {
    validateParty,
    validatePartyId  
} = require('./parties-middleware')

// ------- /api/parties -----

router.get('/', (req, res) => {
    db.getParties()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: 'The party information could not be retrieved' });
    });
});

router.get('/:id', validatePartyId, (req, res) => {
    const { id } = req.params;
  
    db.getPartyById(id)
    .then(party => {
     res.status(200).json(party)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get party' });
    });
  });

  router.post('/', validateParty, (req, res) => {
    const party = req.body;
    db.addParty(party)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500)
            .json({errorMessage: 'There was an error while saving the party to the database'});
        });
});

router.delete('/:id', validatePartyId, (req, res) => {
  const id = req.params.id
  db.deleteParty(id)
  .then(response => {
      res.status(200).json({message: 'the party was deleted.'});
  })
  .catch(() => {
      res
      .status(500)
      .json({ errorMessage: 'The party could not be removed' });
  });
});

router.put('/:id', validatePartyId, (req, res) => {
  const party = req.body;
  const id = req.params.id
      db.updateParty(id,  party)
      .then(respones => {
          res.status(200).json({message: 'the party was updated.'});
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json({errorMessage: 'The party information could not be modified.' });
      });
});