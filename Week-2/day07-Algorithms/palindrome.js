/*      FIRST SOLUTION        */

function palindrome(word) {
    //if word has only one character then automatically it is palindrome
    if (word.length < 1) return !word.length
    //slice last and first letter and compare if they are the same
    //until the lenght of word is <= 1
    if (word[0] == word[word.length-1]) {
        return palindrome(word.slice(1,-1))
    } else {
        //if the first and last letter is not the same return false
        return false
    }
}


console.log(`test palindrome 1: -> ${palindrome('a')}`)
console.log(`test palindrome 1: -> ${palindrome('noon')}`)
console.log(`test palindrome 3: -> ${palindrome('civic')}`)
console.log(`test palindrome 4: -> ${!palindrome('test')}`) //this is not palindrome - true
console.log(`test palindrome 5: -> ${!palindrome('paulina')}`) //this is not palindrome - true


/*      SECOND SOLUTION        */

function palindrome2(word) {
    reverseWord = word.split('').reverse().join(''); 
    if (word.length < 1) return !word.length
    if (word == reverseWord) {
        return true
    } else {
        return false
    }
}

console.log(`test palindrome 1: -> ${palindrome2('a')}`)
console.log(`test palindrome 1: -> ${palindrome2('noon')}`)
console.log(`test palindrome 3: -> ${palindrome2('civic')}`)
console.log(`test palindrome 4: -> ${!palindrome2('test')}`) //this is not palindrome - true
console.log(`test palindrome 5: -> ${!palindrome2('paulina')}`) //this is not palindrome - true

