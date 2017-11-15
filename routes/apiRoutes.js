// var app = require('./server')

var waitingTable = require("../data/waiting");
var reservedTable = require("../data/reserved");


module.exports = function(app) {

    // Create New Reservatoins - takes in JSON input
    app.post("/api/new", function(req, res) {

        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newReservation = req.body;
        newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

        console.log(newReservation);
        //if  5 tables push to other array
        reservedTable.push(newReservation);
        console.log(reservedTable)
        res.json(reservedTable);
    });

   
}