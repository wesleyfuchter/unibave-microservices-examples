const express = require('express')
const bodyParser = require('body-parser')
const amqplib = require('amqplib/callback_api')
const { MongoClient } = require('mongodb')

const app = express()
const port = 3000
const queue = 'transactions'
const amqp = 'amqp://localhost:5672'
const mongoUrl = 'mongodb://localhost:27017'
const mongoClient = new MongoClient(mongoUrl)
const dbName = 'transactionsdb'

let channel = null
let transactionsCollection = null

app.use(bodyParser.json())

app.listen(port, () => {
  
  amqplib.connect(amqp, (err, conn) => {
    if (err) throw err
    conn.createChannel((err, ch1) => {
      if (err) throw err
      ch1.assertQueue(queue)
      channel = ch1
      console.log(`transaction-service connected to AMQP running at ${amqp}`)
    });
  });
  
  mongoClient.connect().then(() => {
    console.log(`transaction-service connected to MongoDB running at ${mongoUrl}`)
    const db = mongoClient.db(dbName)
    transactionsCollection = db.collection('transactions')
  }).catch(err => console.err(err))

  console.log(`transaction-service ready at http://localhost:${port}`)

})

app.post('/transactions', (req, res) => {
    const { body } = req
    console.log('sending message', body)
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(body)))
    transactionsCollection.insertOne(body).then(result => console.log('Inserted document =>', result))
    res.status(200).send()
})

