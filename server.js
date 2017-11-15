// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var waitingTable = require("./data/waiting");
var reservedTable = require("./data/reserved");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Starts the server to begin listening
// =============================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});	
