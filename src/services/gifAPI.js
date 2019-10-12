import axios from 'axios';

const gifAPI = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

export default gifAPI;
