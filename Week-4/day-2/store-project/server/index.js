const express = require('express');
const app = express();

app.listen(4001, () => console.log('Express API listening on port 4001'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  'postgres://postgres:secret@localhost:5432/postgres'
);

const Product = sequelize.define(
  'product',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: Sequelize.STRING
  },
  {
    tableName: 'products',
    timestamps: false
  }
);

Product.findById(1).then(product => console.log(JSON.stringify(product)));
