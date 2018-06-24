let word = "hello"
let guesses = ['o', 'l', 'e', 'h', 'a', 'l']
let letters = word.split('')

function wrongGuessCount(word, guesses) {
    return guesses.map(guess => word.indexOf(guess)).filter(i => i==-1).length
}

console.log('Show wrong guesses: ' + wrongGuessCount(letters,guesses)) //1


function showGuess(word, guesses) {
    let positionsCorrect = guesses.map(guess => letters.indexOf(guess)).filter(item => {return item > -1; }) //[ 2, -1 ]
    let dashArray = letters.map(guess => {return '_'})
    console.log('Show position correct: ' + positionsCorrect) //  4,2,1,0
    let finalSplitWord = positionsCorrect.map(element => dashArray[element] = letters[element]);
    let joined = dashArray.join('');
    console.log('final word ' + joined)
    return joined
}

console.log('Show guesses joined and positionsCorrent ' + showGuess(word, guesses))

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
