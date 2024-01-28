import axios from 'axios'

axios.defaults.baseURL = "http://localhost:300/"

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.defaults.timeout = 10000

export default axios