const express = require('express')
const app = express()
const os = require("os");
const hostname = os.hostname();
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello World from ${hostname}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})