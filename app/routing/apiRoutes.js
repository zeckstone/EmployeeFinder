const express = require('express');

const router = express.Router();

const employeeList = require("../data/employees.js");



router.get("/api/employees", function(req, res){
    res.sendFile(path.join(__dirname, "/../home.html"));
});

router.post("/api/employees", function(req, res){
    res.sendFile(path.join(__dirname, "/../home.html"));
});

module.exports = router;

//need a route to get all data and another for specific data