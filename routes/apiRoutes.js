

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create New Reservatoins - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newRes = req.body;
  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes);
  //if  5 tables push to other array
  reservations.push(newRes);
  res.json(newRes);
});