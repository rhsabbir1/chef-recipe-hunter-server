const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const chefData = require('./data/chif.json')
const news = require('./data/news.json')
const cors = require('cors')
app.use(cors())


app.get('/chefData', (req, res) => {
  res.send(chefData)
})
app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/chefData/:id', (req, res) => {
 const id = req.params.id;
 const seletedChif = chefData.find(n => n.id === id);
  res.send(seletedChif)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
