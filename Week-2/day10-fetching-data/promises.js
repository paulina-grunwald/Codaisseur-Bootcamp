const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
 }
 const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
 }
 
 const getDocument = (documentId) => {
  return new Promise((resolve, reject) => {
    function loadComplete(document) {
      if (documents[documentId] === undefined) {
        reject('Document not found')
      }
      resolve(documents[documentId])
    }
    setTimeout(loadComplete, 1000)
  })
 }
 
 const getAuthor = (authorId) => {
  //console.log(authorId);
  return new Promise((resolve, reject) => {
    function loadComplete(author) {
      if (authors[authorId] === undefined) {
        reject('Author not found')
      }
      resolve(authors[authorId])
    }
    setTimeout(loadComplete, 1000)
  })
 }
 
 getDocument(2)
  .then(document => getAuthor(document.authorId))
  .then(author => console.log(author))
  .catch(error => console.log(error))
