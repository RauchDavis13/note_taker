const router = require('express').Router();
const { findById, createNewNote, validateNote } = require('../../lib/index');
const { note } = require('../../db/db.json');

router.get('/db/:id', (req, res) => {
  const result = findById(req.params.id, db);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/db', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = db.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, db);
    res.json(note);
  }
});

module.exports = router;
