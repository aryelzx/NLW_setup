import axios from 'axios';

export const api = axios.create({ // Cria uma instância do axios
  baseURL: 'http://localhost:3333' 
})