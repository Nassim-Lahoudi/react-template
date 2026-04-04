import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
    'Content-Type': 'application/json',
    },
})

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error.response?.data?.message || 'Ein Fehler ist aufgetreten')
    }
)

export default apiClient
