let word = "hello"
const letters = word.split('')
let guesses = ['h', 'c','o','a', 'c', 'c', 'c', 'c', 'c']
// Step One
//Write a function that takes a word, and an array of guessed letters, and returns count of failed guesses.

function wrongGuessCount(word, guesses) {
    // return new array w/ indexof, 
    // then return new ar from this where -1, 
    // then return length of this
    return guesses.map(guess => word.indexOf(guess)).filter(i => i==-1).length
}

console.log('show wrong guesses ' + wrongGuessCount(letters,guesses)) //1

//Step Two
//Write a function that takes a word, and a array of guesses, 
//and returns a string with dashes or letters with spaces in between.
// Hint: String.split('') will turn word into an array of letters.
// Hint: String.join(separator) will glue an array into a single string.

function showGuess(word, guesses) {
    let positionsCorrect = guesses.map(guess => letters.indexOf(guess)).filter(item => {return item > -1; }) //[ 2, -1 ]
    let dashArray = letters.map(guess => {return '_'})
    let finalSplitWord = positionsCorrect.map(element => dashArray[element] = letters[element]);
    let joined = dashArray.join('');
    return joined, positionsCorrect.length
}

console.log('show guesses ' + showGuess(word, guesses))

//Step Three

//Write a function that takes a word, and an array of guesses, and returns if the player has won or not.//

function isWinner(word, guesses) {
    let wrongGuessesCount = wrongGuessCount(word, guesses) 
    let positionsCorrect = guesses.map(guess => letters.indexOf(guess)).filter(item => {return item > -1; })

    if (wrongGuessesCount >= 6) {
        console.log('you loose')

    }
    if (wrongGuessesCount <6 && positionsCorrect.length == letters.length) {
        console.log('you win')
    }
}

console.log(isWinner(word, guesses))

console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))
console.log('test winner 3:', !isWinner('dog', ['d', 'o']))
console.log('test winner 4:', isWinner('noon', ['n', 'o']))