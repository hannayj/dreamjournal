import axios from 'axios'
const baseURL = '/api/comments/'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)
}

const update = commentObject => {
    const request = axios.put(`${baseURL}/${commentObject.id}`, commentObject)
    return request.then(response => response.data)
}

export default { getAll, create, deletePerson, update }