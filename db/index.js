const fs = require('fs');
const util = require('util');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);


function getAllNotes() {
  return readFileAsync(path.join(__dirname, 'db.json'), "utf8")
    .then(notes => {
      let results;
      try {
        results = [].concat(JSON.parse(notes));
      } catch (error) {
        results = []
      }
      return results;
    })

}

function createNewNote(note) {
  const { title, text } = note;
  const newNote = {title, text};
  getAllNotes()
    .then(notes => [...notes, newNote])
    .then(upDatedNotes => { return writeFileAsync(path.join(__dirname, 'db.json'), json.stringify(upDatedNotes)) })
    .then( () => newNote);

  // notesArray.push(note);
  // fs.writeFileSync(
  //   path.join(__dirname, 'db.json'),
  //   JSON.stringify({ notesArray }, null, 2)
  // );
  // return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  getAllNotes,
  createNewNote,
  validateNote
};
