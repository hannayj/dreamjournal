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

const update = async (sleepPeriod) => {
  const response = await axios.put(baseUrl + sleepPeriod.id, sleepPeriod)
  return response.data
}

const remove = async (sleepPeriod) => {
  const response = await axios.delete(baseUrl + sleepPeriod.id)
  return response.data
}

export default { getAll, create, update, remove }