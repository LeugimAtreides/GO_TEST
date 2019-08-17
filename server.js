const express = require("express");

const mongoose = require("mongoose");
const routes = require(".routes");
const app = express();
const PORT = process.env.PORT || 8080;


// Configure body parsing for AJAX requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes, both API and view

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGOD_URI || "mongod://localhost/portfolio"
)

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);