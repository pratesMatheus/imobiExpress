import axios from "axios";

export const urlApi = 'http://localhost:8700';


const Api = axios.create({
  baseURL: 'http://localhost:8700',
  /* headers: {
    'Content-Type': 'application/json'
  } */
});

export default Api;
