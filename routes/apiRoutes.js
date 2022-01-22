const router = require('express').Router();
const { getAllNotes, createNewNote, validateNote } = require('../db/index.js');

router.get('/notes', (req, res) => {
  getAllNotes().then(
    notes => {
      console.log(notes);
      return res.json(notes);
    }
  )
    .catch(err => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be

  createNewNote(req.body)
    .then(note => res.json(note))
    .catch(err => res.status(500).json(err))

});

module.exports = router;
