import axios from 'axios'

const BASE_API_URI = import.meta.env.VITE_APP_API_URI;
const TOKEN = import.meta.env.VITE_APP_API_TOKEN;
debugger
const api = axios.create({
  baseURL: BASE_API_URI,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  },
  params: {
    fromChannel: 'stone'
  }
})


export default api
