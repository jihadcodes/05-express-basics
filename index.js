const express = require('express');
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Home!')
})
app.post('/', (req, res) => {
  let body = req.body;
  console.log(body)
  res.send('Hello POST!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})