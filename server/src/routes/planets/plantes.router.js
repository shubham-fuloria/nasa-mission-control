const express = require('express')

const { httpGetAllPlanets } = require('./planets.controller')

const plantesRouter = express.Router()

plantesRouter.get('/planets', httpGetAllPlanets)

module.exports = plantesRouter
