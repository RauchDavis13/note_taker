const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
  store
    .getAllNotes()
    .then(
      (notes) => {
        console.log(notes);
        return res.json(notes);
      }
    )
    .catch((err) => res.status(500).json(err))
});

router.post('/notes', (req, res) => {
store

  .createNewNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));

});

router.delete('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id == req.params.id);
  if (!note) return res.status(404).send('The note with the given ID is not found')

  const index = notes.indexOf(note);
  notes.splice(index, 1);
  updateDb(notes)

  res.send(note);
})

module.exports = router;
