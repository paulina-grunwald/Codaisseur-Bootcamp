const express = require('express')
const app = express()

// add the Sequelize connection code just above the app.listen code
var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5433/postgres', {
   define: {
       timestamps: false
   }
})

app.listen(4001, () => console.log('Express API listening on port 4001'))

// We need a small addition to support CORS requests.
// the gist of it is that when a server runs on location X and your frontend is served on Y,
// your API should specify that it's OK that the frontend runs on Y.
// add after app.listen:
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

// the sequelize model:
const Product = sequelize.define('product', {
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
}, {
  tableName: 'products',
  timestamps: false
})

// If you want, you can test your app right now by adding this line:
//Product.findById(1).then(product => console.log(JSON.stringify(product)))
// Running your app should show some information about the Knife product in the terminal.
// Works? Great! In the next step we'll add the endpoints.
// If it doesn't work, make sure to recheck if your Postgres database is running in docker and
// wether the username/password match the ones specified in index.js (postgres / secret in the example code).
// IS IS WORKING..


app.get("/products", (req, res) => {
  sendResponse(
    Product.findAll({
      attributes: ["id", "name", "price"]
    }),
    res
  )
})

app.get("/products/:id", (req, res) => {
  sendResponse(Product.findById(req.params.id), res)
})

const sendResponse = (promise, res) => {
  promise.then(
    result => {
      if (result) {
        res.send(result)
      } else {
        res.status(404).end()
      }
    },
    err => {
      console.error(err)
      res.status(500).send(JSON.stringify(err))
    }
  )
}