import axios from 'axios';
import { BASE_URL } from './config';
console.log('BASE_URL: ', BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
