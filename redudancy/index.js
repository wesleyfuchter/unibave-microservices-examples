const express = require('express')
const app = express()
const os = require("os")
const hostname = os.hostname()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Olá mundo do ${hostname}`)
})

let error = false;

const healthResponse = (req, res) => {
  if (error) {
    res.status(500).json({status: "INTERNAL_SERVER_ERROR"})  
  } else {
    res.status(200).json({status: "OK"})
  }
}

app.get('/health/live', healthResponse)

app.get('/health/ready', healthResponse)

app.get('/error', (req, res) => {
  error = !error;
  res.status(200).json({status: "OK"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})