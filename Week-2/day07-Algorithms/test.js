let word = "hello"
const letters = word.split('')
let guesses = ['h', 'c','o','a', 'c', 'c', 'c', 'c', 'c']

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var unique = guesses.filter( onlyUnique );

console.log(unique)