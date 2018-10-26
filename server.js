const express = require ('express');

const path = require ("path");

const app = express();

const PORT = process.env.PORT|| 8080;


// app.use(express.static("app/public"));

// const htmlRoutes = require("./routing/htmlRoutes");

// const apiRoutes = require("./routing/api-routes");

// app.use(apiRoutes);
// app.use(htmlRoutes);

app.get('/', function(req, res){
    res.sendFile('./app/public/home.html')
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});

