import axios from 'axios';

const axiosAuth = axios.create({
  baseURL: 'https://api.adviceslip.com/'
})


export default axiosAuth;