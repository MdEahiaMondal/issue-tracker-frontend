import axios from 'axios'

const AXIOS = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
});

AXIOS.interceptors.request.use(function (config) {
  const TOKEN = localStorage.getItem('token')
  if (TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default AXIOS
