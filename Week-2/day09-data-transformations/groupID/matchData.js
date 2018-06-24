// Write down the names of all the people whose ID is in the list of numbers.

const employees= [
    {name: "Mike Jonson", id: 1, age: 22},
    {name: "Paulina Grunwald", id: 2, age: 30},
    {name: "Adrian Kok", id: 3, age: 27},
    {name: "Linda Marks", id: 4, age: 19},
    {name: "Ronald Romijn", id: 5, age: 43},
  ];

const nums = [2,3];

const matchNumstoId = employees.filter(employee => (nums.indexOf(employee.id) !== -1)).map(employees => employees.name)
console.log(matchNumstoId)                



// Other solution
// const filteredNames = [];
// for (let index = 0; index < matchNumstoId.length; index++) {
//     filteredNames.push(matchNumstoId[index].name);
// }
// console.log(filteredNames);



// write down all the names and ages of people whose ID is on the first paper, but only if they're older than 21.
const matchNumstoIdAndAge = employees.filter(employee => (nums.indexOf(employee.id) !== -1)).filter(employees => employees.age > 21)
console.log(matchNumstoIdAndAge)
