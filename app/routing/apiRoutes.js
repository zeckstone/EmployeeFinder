
const EmployeesList = require('../data/employees');
const path = require('path');


module.exports = function(app) {
  
    app.get('/api/employees', function(req, res) {
    res.json(EmployeesList);
  });

};
