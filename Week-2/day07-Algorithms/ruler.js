function ruler(n) {
    if (n===1) return "-"
    return `${ruler(n-1)}\n${"-".repreat(n)}\n${ruler(n-1)}`
}

// test
console.log(`test 1: -> ${ruler(1) === '-'}`)
console.log(`test 2: -> ${ruler(2) === '-\n--\n-'}`)
console.log(`test 3: -> ${ruler(3) === '-\n--\n-\n---\n-\n--\n-'}`)
console.log(ruler(5))

array.forEach(element => {
    
});