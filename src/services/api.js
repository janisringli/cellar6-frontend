import axios from 'axios';

// const BASE_URL = "http://18.195.194.15:8080";
const BASE_URL = "http://localhost:8080";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 12000,
});

export default instance;