const launches = new Map()

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('26 December, 2022'),
  destination: 'Kepler-442 b',
  customer: ['Shubham', 'NASA'],
  upcoming: true,
  success: true
}

launches.set(launch.flightNumber, launch)

function getAllLaunches () {
  return Array.from(launches.values())
}

module.exports = {
  getAllLaunches
}
