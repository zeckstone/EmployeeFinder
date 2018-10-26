const express = require('express');

const path = require('path');

const router = express.Router();


router.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
})
// router.get("*", function(req, res){
//     res.sendFile(path.join(__dirname + "/survey.html"));
// });
// module.exports = router;



// //copy
// // ===============================================================================
// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
// // ===============================================================================
// const path = require('path');


// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // HTML GET Requests
//   // Below code handles when users 'visit' a page.
//   // In each of the below cases the user is shown an HTML page of content
//   // ---------------------------------------------------------------------------

//   app.get('/tables', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/tables.html'));
//   });

//   app.get('/reservations', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/reservations.html'));
//   });

//   // If no matching route is found default to home
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/home.html'));
//   });
// };
