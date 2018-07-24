import axios from 'axios';

export const config = {
  baseURL: window.API_URL || 'https://jsonplaceholder.typicode.com',
};

const api = axios.create(config);

export default api;
