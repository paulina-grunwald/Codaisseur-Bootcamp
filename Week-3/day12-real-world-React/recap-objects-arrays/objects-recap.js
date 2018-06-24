// const name = "Apple"
// const flavor = "Sweet"

// const fruit = {
//     name, flavor
// }

// console.log(fruit.name)

console.log('...')

const fruit = {
    name: 'Passion Fruit',
    flavor: 'Sweet',
  }

const vegs = {
    vegName: 'paprika',
    vegflavor: 'spicy',
}
  
  const { name, flavor } = fruit
  const { vegName, vegflavor } = vegs
  console.log(name)
  //=> 'Passion Fruit'

  console.log(flavor)
  //=> 'Sweet'
  
  // The Object is still intact!
  console.log(fruit)
  //=> { name: 'Passion Fruit', flavor: 'Sweet' }
  console.log(vegs)
  console.log(vegName)

  //Spread operator

  const priceVeg = (veg,price) => {
      return {
          price,
          ...veg,
      }
  }

const type = "Tomatoe"
const color = "Red"

const veg = {
      type,
      color,
  }

console.log(priceVeg(veg, 2))
// { price: 2, type: 'Tomatoe', color: 'Red' }
console.log(priceVeg)
// [Function: priceVeg]