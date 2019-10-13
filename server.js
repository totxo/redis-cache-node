const fetch = require('node-fetch');

const USER_URL = 'http://localhost:4000/users';

fetch(USER_URL)
  .then( response => response.json())
  .then( users => console.log(users));
