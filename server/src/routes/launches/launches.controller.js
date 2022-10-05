const { getAllLaunches } = require('../../models/launches.model')

function httpGetAllLaunches (req, res) {
  //data manipulation
  return res.status(200).json(getAllLaunches())
}

module.exports = {
  httpGetAllLaunches
}
