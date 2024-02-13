// First, ensure axios is available in your project. If not, you can install it using npm or include it via a script tag.

// For Node.js, you might need to install axios via npm first:
// npm install axios

// If you're using this in a browser, include Axios through a script tag or use a module bundler.

const axios = require('axios'); // Include this line if you're using Node.js

async function fetchUserData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const data = response.data; // Axios automatically converts the response to JSON
    console.log('User data:', data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
        console.error('User data not found (404).');
      } else {
        console.error('Failed to fetch user data:', error.message);
      }
  }
}

fetchUserData();
