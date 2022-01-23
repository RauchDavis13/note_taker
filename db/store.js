const fs = require('fs');
const util = require('util');
const uuidv1 = require('uuid');

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

class Store {

  read () {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }

  getAllNotes() {
    return this.read()
      .then((notes) => {
        let results;
        try {
          results = [].concat(JSON.parse(notes));
        } catch (error) {
          results = []
        }
        return results;
      })
  
  }
  
  createNewNote(note) {
    const { title, text } = note;
    if(!title || !text) {
      throw new Error('note title and text can not be blank');
    }
    const newNote = {title, text, id: uuidv1};
    return this.getAllNotes()
      .then(notes => [...notes, newNote])
      .then((upDatedNotes) => this.write(upDatedNotes))
      .then( () => newNote); 
  }

  // deleteNote(note) {
  //   const note = notes.find(n => n.id == req.params.id);
  //   if(!title || !text) {
  //     throw new Error('note title and text can not be blank');
  //   }
  //   const newNote = {title, text, id: uuidv1};
  //   return this.getAllNotes()
  //     .then(notes => [...notes, newNote])
  //     .then((upDatedNotes) => this.write(upDatedNotes))
  //     .then( () => newNote); 
  // }   

  
}


module.exports = new Store();