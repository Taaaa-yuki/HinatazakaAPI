const fetch = require('node-fetch');
const url = 'http://localhost:3000/data/members.json';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    module.exports = data;
  })
  .catch(error => {
    console.error(error);
  });
