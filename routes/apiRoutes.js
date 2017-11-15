// var app = require('./server')

var waitingTable = require("../data/waiting");
var reservedTable = require("../data/reserved");


module.exports = function(app) {

    // Create New Reservatoins - takes in JSON input
    app.post("/api/new", function(req, res) {


        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newReservation = req.body;
        console.log('newReservation', newReservation)

        if (reservedTable.length <= 5) {
            reservedTable.push(newReservation);
            console.log('reservedTable', reservedTable);
        } else {
            waitingTable.push(newReservation);
        }

   app.get("/api/:reservation?", function(req, res) {
        var chosen = req.params.reservation;

        if (chosen === "reserved") {
            return res.json(reservedTable);
        }
        return res.json(waitingTable);
    });
}