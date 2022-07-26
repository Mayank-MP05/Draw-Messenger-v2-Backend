const express = require('express')
const app = express()
const port = 9000
const connection = require('./db/db-connect')
const user = require('./models/users.model')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})