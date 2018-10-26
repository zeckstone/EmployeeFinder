// Require/import the Express module
const express = require('express');

// Call the Express function and store result as app
const app = express();

// Define a port to listen for incoming requests
const PORT = 8080;

// Define an action to be performed when a GET request is made to the root route
app.get('/', function(request, response){
  response.send('Thank you for visiting our site!');
});

// Define an action to be performed when a GET request is made to the 'author' route
app.get('/author', function(request, response){
  response.send('This server was coded by Ada Lovelace.');
});

// Define an action to be performed when a GET request is made to the 'date' route
app.get('/date', function(request, response){

  // Create a new Date object stored in a variable called 'today'
  const today = new Date();
  // Output the string with today's date formatted in human readable form
  response.send(`Today's date is ${today.toDateString()}.`);
});

// Start our server so it can begin listening to client requests
app.listen(PORT, function(){

  // Log (server-side) when our server has started
  console.log(`Server is listening on: http://localhost:${PORT}`);
})