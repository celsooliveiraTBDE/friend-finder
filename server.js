// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// (DATA)
// =============================================================
var characters = [
    {
        "name":"Gin and Tonic",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHYHmb9WspXtXC-Xuy9aRcP2pDKJajWO1c-GEtatQZY2mWMmY",
        "scores":[
            5, //sweetness
            1, //sourness
            4, //type of spirit? maybe one for each number
            4, //salt
            5, //
            1,
            2,
            5,
            4,
            1
          ]
      }
      
];
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  