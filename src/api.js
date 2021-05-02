import axios from 'axios';

export default axios.create({
  baseURL: `https://entropiya-server.herokuapp.com/`
  // baseURL: `http://localhost:5000/`
});