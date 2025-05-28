// This JavaScript code demonstrates how to fetch a JSON object from an API.
const axios = require('axios');

async function fetchJsonData(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(error.response && error.response.data.message || 'Error fetching data.');
  }
}

// Example usage:
fetchJsonData('https://jsonplaceholder.typicode.com/posts/1');
