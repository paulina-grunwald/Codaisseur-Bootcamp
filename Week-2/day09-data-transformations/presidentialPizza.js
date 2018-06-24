/*Given the following data, I want to know

all the presidents' info
whether or not pizza will be delivered to their address
the age of the oldest president
the age of the youngest president
*/

const names = ["George", "Richard", "Abraham", "Donald"]
const ages = {
  George: 55,
  Richard: 86,
  Abraham: 50,
  Donald: 65
}
const addresses = {
  George: "Fleet street, 121b",
  Richard: "Bermuda drive, 33",
  Abraham: "Cincinatti Av., 22a"
}
const willDeliverPizza = {
  "Fleet street": true,
  "Bermuda drive": false,
  "Cincinatti Av.": true
}

// higest age 


output = { userData:
    [ { name: 'George',
        age: 71,
        address: 'Fleet street, 121b',
        willDeliverPizza: true },
      { name: 'Richard',
        age: 81,
        address: 'Bermuda drive, 33',
        willDeliverPizza: false },
      { name: 'Abraham',
        age: 56,
        address: 'Cincinatti Av., 22a',
        willDeliverPizza: true },
      { name: 'Donald',
        age: 71,
        address: undefined,
        willDeliverPizza: 'Unknown' } ],
   highestAge: 81,
   lowestAge: 56 }