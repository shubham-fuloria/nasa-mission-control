const express = require('express')
const path = require('path')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/plantes.router')
const launchesRouter = require('./routes/launches/launches.router')

const app = express()

app.use(morgan('combined'))

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(planetsRouter)
app.use(launchesRouter)

app.use('/*', (req, res) => {
  // console.log('request to root')
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
