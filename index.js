const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const chefData = require('./data/chif.json')

app.get('/', (req, res) => {
  res.send(chefData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
