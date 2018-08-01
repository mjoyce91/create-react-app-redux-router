import axios from 'axios';

export const config = {
  baseURL: localStorage.getItem('API_URL'),
};

const api = axios.create(config);

export default api;
