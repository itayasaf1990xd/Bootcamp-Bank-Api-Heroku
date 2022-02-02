import axios from 'axios';

/* Development (LocalHost)
 * Client: http://localhost:3000/
 * Server: http://localhost:8080/api/users/endpoint
*/
let url = 'http://localhost:8080/api/';

/* Production (Heroku)
 * Client: https://full-stack-template.herokuapp.com/
 * Server: https://full-stack-template.herokuapp.com/api/users/endpoint
*/
if (process.env.NODE_ENV === 'production') {
  url = 'api';
}
export default axios.create({
  baseURL: url,
});
