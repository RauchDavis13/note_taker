# Note Taker

## Bootcamp: Challenge 11 - Create app to generate HTML based Note Taker

The purpose of this assignment, is to create a working app for a user to populate a template to build an HTML based Note Taker file that is generated from a CLI based start through Express using routes.

- Motivation: Test what has been learned through practical application and testing of Javascript, CLI, OOP, TDD, Node and Node modules including "inquirer", with an emphasis on using Express to build the routes

- Project: Create an app to create a Note Taker html file.  The file will be run from routes going through Express and will be started from an API server using node.

- Problem Solved: Once the API server is started from the CLI, navigating to the PORT used (localhost:3001) in the browser, the user can create new Notes, which will be shown on the left of the screeen.  The user can delete/modify notes as necessary.

- Lessons Learned: Understanding the flow of the routes can be confusing.  Dividing responsibilites of the different files and how they connect to flow the data is difficult.  Ran into a major problem of being able to delete notes, however, entry of new notes works correctly.

## Folders and Files

- README.md:  Explains usage and functionality of this app

- /public: Contains the files for CSS styling and html framework files for index.html and notes.html, as well as the index.js, where many of the functions for creating, saving and deleting notes are contained.
 
- /routes: Folder where routes reside for API and HTML

- gitignore: Contains files names that are not passed to Github for usage with the app

- package-lock.json: Package of Node modules, including "inquirer"

- package.json:  Node module file

- server.js: This is where the app begins.  It brings in the "express" node to facilitate a routing of the data to the different files.  This is also where the PORT is declared for the API server.


## Acceptance Criteria


- WHEN I open the Note Taker / THEN I am presented with a landing page with a link to a notes page - 

- WHEN I click on the link to the notes page / THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

- WHEN I enter a new note title and the note’s text / THEN a Save icon appears in the navigation at the top of the page - The user will see a disk icon which will the note to be saved

- WHEN I click on the Save icon / THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes - Upon a new note being entered and the save button clicked, the saved note appears on the left side of the screen

- WHEN I click on an existing note in the list in the left-hand column / THEN that note appears in the right-hand column - Upon the user clicking the note in the left side of the screen, that note then appears in the main area, or right side of the screen

- WHEN I click on the Write icon in the navigation at the top of the page / THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column - Upon clicking the "+" icon, the user is presented with empty fields where new notes can be created


## GitHub repository...
https://github.com/RauchDavis13/note_taker.git

## Heroku file...
https://enigmatic-wave-75139.herokuapp.com/


## Thank you's
Matthew Kim(Instructor)
Valeria Flores(TA)
Dustin Erwin (TA)
Kris Renaldi (TA)
Sandra Smith (Tutor)

Fellow students...
Robert Evanic
Adam Howard


