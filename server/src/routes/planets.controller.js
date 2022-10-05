const { planets } = require('../models/planets.model')

function getAllPlanets (req, res) {
  return res
    .setHeader('access-control-allow-origin', '*')
    .status(200)
    .json(planets)
}

module.exports = {
  getAllPlanets
}
