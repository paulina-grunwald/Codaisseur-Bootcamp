/*
According to Wikipedia (inclusive ranges):
A = 9 - 10
B = 8 - 8.9
C = 7 - 7.9
D = 6 - 6.9
F = 1 - 5.9
*/

function toAmericanGrade(grade) {
    if (1<=grade && grade<=5.9) return "F"
    if (6<=grade && grade<=6.9) return "D"
    if (7<=grade && grade<=7.9) return "C"
    if (8<=grade && grade<=8.9) return "B"
    if (9<=grade && grade<=10) return "A"
}  
  // tests
  console.log(`9 = A -> ${'A' == toAmericanGrade(9)}`)
  console.log(`10 = A -> ${'A' == toAmericanGrade(10)}`)
  console.log(`1 = F -> ${'F' == toAmericanGrade(1)}`)
  console.log(`5.9 = F -> ${'F' == toAmericanGrade(5.9)}`)
  console.log(`6 = D -> ${'D' == toAmericanGrade(6)}`)
  console.log(`6.9 = D -> ${'D' == toAmericanGrade(6.9)}`)