import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/users/'

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }

  const deleteUser = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

  export default {update, deleteUser}