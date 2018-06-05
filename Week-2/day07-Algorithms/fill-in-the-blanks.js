// At the question marks, fill in one of the options: transform, select, reduce, map, or filter

const route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

const distance1 = route1[0]               // select
const distance1InMiles = distance1 / 1.6  // transform

// what does this function do? ...
function kilometerToMile(km) {
  return km / 1.6
}

// what does this function do? ...
function total(route) {
  let res = 0
  for (let i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // filter, select
  }
  return res
}

// what does this function do? ...
function routeInMiles(route) {
  const res = []
  for (let i = 0; i < route.length; i++) { // iterate
    const mile = kilometerToMile(route[i]) // filter, select
    res[i] = mile                        // keep
  }
  return res
}

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

