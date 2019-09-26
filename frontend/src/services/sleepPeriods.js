import axios from 'axios'

const baseUrl = '/api/sleepperiods/'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (sleepPeriod) => {
  const response = await axios.post(baseUrl, sleepPeriod)
  return response.data
}

export default { getAll, create }