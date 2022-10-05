const express = require('express')

const planetsRouter = require('./routes/plantes.router')

const app = express()

app.use(express.json())

app.use(planetsRouter)

module.exports = app
