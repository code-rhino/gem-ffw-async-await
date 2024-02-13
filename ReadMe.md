[Video](https://vimeo.com/912679081?share=copy)

### Step 1: Set Up Your Environment
- If you're working in a Node.js environment, start by including Axios with `const axios = require('axios');`. Axios is a promise-based HTTP client for making requests to external servers.

### Step 2: Understanding Asynchronous Functions
- Asynchronous functions allow JavaScript to perform other tasks while waiting for an asynchronous operation (like fetching data from an API) to complete. They are defined using `async` before the function keyword.

### Step 3: Implementing the `fetchUserData` Function
- Define an asynchronous function named `fetchUserData`. This function will fetch user data from a specified URL using Axios and log the data to the console.

### Step 4: Making an HTTP GET Request
- Inside `fetchUserData`, use `await` with `axios.get('https://jsonplaceholder.typicode.com/users/1')` to pause execution until the promise returned by `axios.get` is resolved. `await` can only be used inside `async` functions.
- Extract the data from the response using `response.data`. Axios automatically parses the JSON response to a JavaScript object.

### Step 5: Error Handling
- Wrap the request in a `try-catch` block to handle potential errors. This is important for dealing with network issues, wrong URLs, or any errors returned by the server.
- In the `catch` block, check if the error is a 404 (Not Found) using `error.response.status` and log a specific message. Otherwise, log a generic error message along with `error.message`.

### Step 6: Running the Function
- Call `fetchUserData()` to execute your function. Since it's asynchronous, it returns immediately, and the console logs will show up once the data has been fetched or an error has occurred.

### Step 7: Observing the Output
- When successful, the console will log the user data fetched from the API.
- If the URL is incorrect or the server is down, it will log "User data not found (404)." or a generic failure message, respectively.


