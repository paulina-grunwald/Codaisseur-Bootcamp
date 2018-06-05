/*
Write a function that returns the average grade, in american grades.
Still not using mutation!
Hint: use reduce first on the european grades, then transform that to an american grade
*/

function convertToAmericanGrade(grade) {
    if (1<=grade && grade<=5.9) return "F"
    if (6<=grade && grade<=6.9) return "D"
    if (7<=grade && grade<=7.9) return "C"
    if (8<=grade && grade<=8.9) return "B"
    if (9<=grade && grade<=10) return "A"
}

function toAmericanGrades(grades) {
    return grades.map(grade => convertToAmericanGrade(grade))
}

function averageAmericanGrade(grades) {
    return convertToAmericanGrade((grades.reduce((grade,total) => (total+grade)))/grades.length)
  }


// test
// This array was already declared in the previous section. 
// You might get an error if you run it again.
const grades1 = [2, 2, 2, 2]

console.log(`average: F-> ${'F' == averageAmericanGrade(grades1)}`)