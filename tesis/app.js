var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/test-tesis', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// routes ======================================================================
require('./api/routes.js')(app, express);

//app.use(express.static('public'));

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
