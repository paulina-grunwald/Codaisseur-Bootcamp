const express = require('express')
const app = express()

app.listen(4001, () => console.log('Express API listening on port 4001'))

const { Client } = require('pg')


const connectionString = 'postgresql://postgres:secret@localhost:5434/jobs'
const client = new Client({ connectionString })

client.connect()
app.get('/jobs/:id', (request, response) => {
	const jobsId = request.params.id

  client.query('SELECT * FROM jobs WHERE id = $1', [jobsId], (error, result) => {
    if (error) {
      response.status(500).send({
        message: 'Something went wrong with Postgres!',
        details: error.message
      })
    } else if (result.rows[0]) {
      response.send(result.rows[0])
    } else {
      response.status(404).send({
        message: 'jobs not found!'
      })
    }
  })
})

app.get('/jobs', (request, response) => {
  client.query('select * from jobs', (error, result) => {
    if (error) {
      response.status(500).send({
        message: 'Something went wrong with Postgres!',
        details: error.message
      })
    } else {
      response.send({
        jobs: result.rows
      })
    }
  })
})