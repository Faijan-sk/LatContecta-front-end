import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'https://buprolat.mitopup.com/api',
  baseURL: 'http://192.168.29.200:8000/api/',
  headers: { 'Content-Type': 'application/json' },
})
// http://192.168.29.200:8000/

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    const token = localStorage.getItem('access') // Retrieve auth token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // Handle the error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status === 401) {
      // alert("Session expired.");
      localStorage.removeItem('access')

      console.error('Unauthorized, logging out...')

      setTimeout(() => {
        window.location.reload()
      }, 100)

      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
