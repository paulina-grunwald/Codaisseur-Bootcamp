//determine which numbers in the array are odd or even
const numbers = [0, 1, 4, 5, 6, 9]

even = numbers.filter(num => num%2 == 0)
odd = numbers.filter(num => num%2 !== 0)

console.log(even)
console.log(odd)

let object1 = {
    even: [] ,
    uneven: []
}

object.even.replace(even)