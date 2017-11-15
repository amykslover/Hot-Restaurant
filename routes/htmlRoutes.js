// Routes
// =============================================================

var path = require("path");


module.exports = function(app) {

    // Basic route that sends the user first to the AJAX Page
    app.get("/make", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/make.html"));
    });
    app.get("/view", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}