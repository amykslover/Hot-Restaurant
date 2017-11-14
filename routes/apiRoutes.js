// var app = require('./server')
module.exports = function(app){

	var reservations = [];

	// Create New Reservatoins - takes in JSON input
	app.post("/api/new", function(req, res) {
	  // req.body hosts is equal to the JSON post sent from the user
	  // This works because of our body-parser middleware
	  var newReservation = req.body;
	  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

	  console.log(newReservation);
	  //if  5 tables push to other array
	  reservations.push(newReservation);
	  console.log(reservations)
	  res.json(newReservation);
	});
	
}