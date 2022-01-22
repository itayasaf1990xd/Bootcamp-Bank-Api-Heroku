import axios from 'axios';

// Development
let url = 'http://localhost:8080/api/';

if (process.env.NODE_ENV === 'production') {
  url = 'api';
}
export default axios.create({
  baseURL: url,
});