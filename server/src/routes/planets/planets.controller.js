const { getAllPlanets } = require('../../models/planets.model')

function httpGetAllPlanets (req, res) {
  return res
    .setHeader('access-control-allow-origin', '*')
    .status(200)
    .json(getAllPlanets())
}

module.exports = {
  httpGetAllPlanets
}
