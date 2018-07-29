import axios from 'axios';

export const config = {
  baseURL: localStorage.getItem('API_URL') || 'http://jsonplaceholder.typicode.com',
};

const api = axios.create(config);

export default api;
