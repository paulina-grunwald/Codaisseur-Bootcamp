const express = require('express');
const app = express();
app.listen(4001, () => console.log('Express API listening on port 4001'));

const housesList = {
  1: {
    id: 1,
    title: 'Villa with view on the canal',
    address: 'Keizersgracht 586',
    size: 155,
    price: 5500000
  },
  8: {
    id: 8,
    title: 'Parking spot',
    address: 'Prinsengracht 226',
    size: 5,
    price: 45000
  },
  4: {
    id: 4,
    title: 'Appartment with roof terrace',
    address: 'Zeedijk 129 b',
    size: 35,
    price: 345000
  },
  5: {
    id: 5,
    title: 'Nice loft in the South',
    address: 'Ruysstraat 724 - II',
    size: 59,
    price: 670000
  }
};

app.get('/houses/:id', (request, response) => {
  const houseId = request.params.id;
  const house = housesList[houseId];

  if (house) {
    response.send(house);
  } else {
    response.status(404).send({
      message: 'User not found'
    });
  }
});

app.get('/houses', (request, response) => {
  const houses = Object.keys(housesList).map(item => item);
  response.send({houses});
});
