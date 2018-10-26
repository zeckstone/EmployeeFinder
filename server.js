//imports express and path
const express = require('express');
const path = require('path');
const app = express();

//Server listens on this port
const PORT = 8080;

//Parses requests 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Directs server to use "app/public" for static files
app.use(express.static(path.join(__dirname, 'app/public')));

//Routes for sever requests
require("./app/routing/apiRoutes")(app);
require('./app/routing/htmlRoutes')(app);

//Initiates server listening on port
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})