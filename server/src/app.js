const express = require('express')
const path = require('path')

const planetsRouter = require('./routes/plantes.router')

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(planetsRouter)
app.use('/', (req, res) => {
  // console.log('request to root')
  // res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
