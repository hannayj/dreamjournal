import axios from 'axios'
const baseUrl = '/api/externals/'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  console.log(newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (newObject) => {
  const request = axios.put(baseUrl + newObject.id, newObject)
  return request.then(response => response.data)
}

const deleteExt = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, deleteExt }