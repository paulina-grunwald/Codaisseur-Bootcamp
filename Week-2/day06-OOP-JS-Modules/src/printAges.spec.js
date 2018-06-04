const assert = require("assert")
const userData = require("./data/users")
const { printAges, changeCurrentDate } = require("./printAges")
changeCurrentDate(() => Date.parse("03-01-2018"))

const [ava, james, danielle, darnell] = printAges(userData)

describe("printAges", function() {
  it(`should say "${ava}"`, () => {
    assert.equal(ava, "Ava is 27 years old.")
  })
  it(`should say "${james}"`, () => {
    assert.equal(james, "James is 33 years old.")
  })
  it(`should say "${danielle}"`, () => {
    assert.equal(danielle, "Danielle is 30 years old.")
  })
  it(`should say "${darnell}"`, () => {
    assert.equal(darnell, "Darnell is 35 years old.")
  })
})
