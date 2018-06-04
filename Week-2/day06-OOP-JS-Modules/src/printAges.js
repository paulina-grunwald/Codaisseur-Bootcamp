let currentDate = Date.now
module.exports.changeCurrentDate = function(newCurrentDate) {
  currentDate = newCurrentDate
}

module.exports.printAges = function(users) {
  return users.map(user => {
    const { name, dateOfBirth } = user
    const birthday = Date.parse(dateOfBirth)
    const ageDifMs = currentDate() - birthday
    const ageDate = new Date(ageDifMs)
    return `${name} is ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old.`
  })
}
