// Write a function oldestSoFar that will return the right person object. 
// Don't forget to write a test. The expected output is the whole person object (not just the age).
const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]

let oldestSoFar = people.sort((a,b) => (a.age > b.age ? 1 : -1))[people.length-1]

console.log(oldestSoFar)


function minMax(items) {
    var minMaxArray = items.reduce(function (r, n) {
            r[0] = (!r[0])? n : Math.min(r[0], n);
            r[1] = (!r[1])? n : Math.max(r[1], n);
            return r;
        }, []);

    return minMaxArray;
}

console.log(minMax([4, 1, 2, 7, 6]));