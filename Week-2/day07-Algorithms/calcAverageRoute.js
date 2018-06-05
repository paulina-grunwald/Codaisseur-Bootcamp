const route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

function averageStretch(route) {
    for (let i = 0; i < route.length; i++) {
      let sum=+route[i]
      return sum
      
    }
    return sum/route.lenght
  }
  
  console.log('average kilometers per stretch:', averageStretch(route1))