// // test wheat class

const {Wheat, Sugarcane, Crop} = require('./crops')
const { Farm} = require('./index')

// test('The Wheat class can calulate a yield', () => {
//   const wheat = new Wheat(100)
//   expect(wheat.getYieldInKg()).toBeDefined()
// })

// test('The Wheat class calulates the proper yield', () => {
//   const wheat = new Wheat(100)
//   expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2)
// })



// // test sugarcane class

// test('The Sugarcane class can calulate a yield', () => {
//     const sugarcane = new Sugarcane(100)
//     expect(sugarcane.getYieldInKg()).toBeDefined()
// })
    
// test('The Sugercane class can calculate a yield', () => {
//     const sugarcane  = new Sugarcane(100)
//     expect(sugarcane.getYieldInKg()).toBeCloseTo(453.38869055124377)
// })

// //test crop

// test('A crop can store it\'s area size', () => {
//     const crop = new Crop(12345)
//     expect(crop.acres).toBe(12345)
// })


// test price ineuro
test('Wheat class calculates the proper yield value', () => {
    const wheat = new Wheat(100)
    expect(wheat.getYieldInEuros()).toBeCloseTo(1011.6, 1)
  })
  
  test('Sugarcane class calculates the proper yield value', () => {
    const sugarcane = new Sugarcane(200)
    expect(sugarcane.getYieldInEuros()).toBeCloseTo(1943.7, 1)
  })
  
  test('Sugarcane class calculates the proper yield value', () => {
    const sugarcane = new Sugarcane(0)
    expect(sugarcane.getYieldInEuros()).toBe(0)
  })

  