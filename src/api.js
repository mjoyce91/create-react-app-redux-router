import axios from 'axios';

export const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
};

const api = axios.create(config);

export default api;
