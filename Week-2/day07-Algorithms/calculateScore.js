let quizData = [{score:16, totalScore:20},{score: 15, totalScore: 21}]

const output = [8,6,2,5]

const outOfTen = (quizScores) => {
    let result=[]
    result = quizScores.map(score => { return score.score/score.totalScore*10})
    return console.log(result)
}
outOfTen(quizData)
/*
const itWorksforSixteenAndTwenty = (score, totalScore) => {return 8}

const itWorksWithArray = (quizData, output) => {}

console.log('It works for 16 and 20', itWorksforSixteenAndTwenty())
console.log('It works for an array', itWorksWithArray(quizScore, output))
*/



route = [4,6,5]
function total(route){
    route/fp
}