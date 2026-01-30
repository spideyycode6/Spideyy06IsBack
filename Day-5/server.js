// Import the Express app from the script.js file
const app = require('./src/script.js');

// Start the server on port 3000
// app.listen() takes two parameters:
// 1. Port number (3000) - where the server will listen for requests
// 2. Callback function - executed when server starts successfully
app.listen("3000",()=>{
    console.log("server is running");
    
})