

// import data from "./data.js"
// import dom from "./dom.js"

// data.getNumberTrivia()
// .then(triviaResponse => dom.printToDom(triviaResponse));

import libraryMembers from "./libraryMembers.js"

let booksRose = libraryMembers.getCheckedOutBooks("Rose","Thorne");
console.log("Rose's Books: ", booksRose);

libraryMembers.memberCheckOutBook("Rose","Thorne", "The Little Prince");
console.log("Rose's Books: ", booksRose);