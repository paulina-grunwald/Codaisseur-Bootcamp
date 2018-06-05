// At the question marks, fill in one of the options: transform, select, reduce, map, or filter

const route = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

const distance = route[0]               // select
const distance1InMiles = distance / 1.6  // transform

// what does this function do? ...
function kilometerToMile(km) {
  return km / 1.6
}

///// Calculate total distance /////

/*function total(route) {
  let res = 0
  for (let i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // map
  }
  return res
}
*/
let total = route.reduce((distance,total) => (distance+total))
console.log(total)

// Convert to miles
/*
function routeInMiles(route) {
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    const mile = kilometerToMile(route[i]) // filter, select
    res[i] = mile                        // keep
  }
  return res
}
*/

let miles = route.map((kilometerToMile(distance))


// what does this function do? ...
function longStretches(route) {
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    let stretch = route[i]               // filter
    if (stretch > 2) {                   // check
      res.push(stretch)                // keep
    }
  }
  return res
}

