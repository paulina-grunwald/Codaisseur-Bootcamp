const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

function getDocument(documentId, callback) {
    function loadComplete() {
        console.log('We got the document, now we get the author');
        callback(documents[documentId])
    }
    setTimeout(loadComplete, 1000)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
      // callback becomes console.log
      // console.log(authors[authorId])
        callback(authors[authorId])
    }
    setTimeout(loadComplete, 1000)
}

const myExampleCallback = (document) => {
  getAuthor(document.authorId, console.log)
};
// Now write some code that calls getDocument X
getDocument(1, myExampleCallback)
// and then (using the callback) loads the related author using getAuthor X
// Print the name of the author to the screen using console.log X
