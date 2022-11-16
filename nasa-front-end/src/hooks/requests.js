import axios from 'axios'
async function httpGetPlanets() {
  const response = await axios.get('http://localhost:8000/planets')
  return await response.data
  // Load planets and return as JSON.
}

async function httpGetLaunches() {

  const response = await axios.get('http://localhost:8000/launches')
  return await response.data
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  console.log(launch)
  return await axios.post('http://localhost:8000/launches', launch)
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {

  return await axios.delete(`http://localhost:8000/launches/${id}`)
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};