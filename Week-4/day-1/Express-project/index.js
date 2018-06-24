const express = require('express');
const app = express();
app.listen(4001, () => console.log('Express API listening on port 4001'));

const usersById = {
  42: {
    id: 42,
    firstName: 'Alice',
    lastName: 'Carroll',
    birthDate: '1865-11-26'
  },
  43: {
    id: 43,
    firstName: 'Canon',
    lastName: 'Duckworth',
    birthDate: '1834-12-4'
  },
  1: {
    id: 1,
    firstName: 'Codaisseur',
    lastName: 'Student',
    birthDate: '2015-05-22'
  }
};

app.get('/users/:id', (request, response) => {
  const userId = request.params.id;
  const user = usersById[userId];

  if (user) {
    response.send(user);
  } else {
    response.status(404).send({
      message: 'User not found'
    });
  }
});
