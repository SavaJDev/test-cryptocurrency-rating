import axios from 'axios'

const instance = axios.create({
  baseURL: '/data/',
  timeout: 5000
}) 

export default instance