import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/' // Adjust the base URL as needed
axios.defaults.withCredentials = true // Enable sending cookies with requests