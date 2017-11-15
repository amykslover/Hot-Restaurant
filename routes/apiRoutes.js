// var app = require('./server')

var waitingTable = require("../data/waiting");
var reservedTable = require("../data/reserved");


module.exports = function(app) {

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


    // Search for Specific Character (or all characters) - provides JSON
    app.get("/api/:reservation?", function(req, res) {
        var chosen = req.params.reservation;

        if (chosen) {
            console.log(chosen);

            for (var i = 0; i < reservedTable.length; i++) {
                if (chosen === reservedTable[i].routeName) {
                    return res.json(reservedTable[i]);
                }
            }

            return res.json(false);
        }
        return res.json(reservedTable);
    });
}