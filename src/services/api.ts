import axios from 'axios';

export default axios.create({
  baseURL: 'https://stephen-king-api.onrender.com/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
