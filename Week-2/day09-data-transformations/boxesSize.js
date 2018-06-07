const initialValue = 0
const values = [3, 5, 1, 4, 2]

const total = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, Math.min(values))

console.log(total)