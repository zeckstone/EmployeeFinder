server.js 
const express = require ('express');

const path = require ("path");

const app = express();

const PORT = process.env.PORT|| 8080;

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});


