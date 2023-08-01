const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Creating Express instance
const app = express();
const PORT = process.env.PORT || 3001;

// Parsing middleware
app.use(bodyParser.json());

// Define your routes here (Example below)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Add more routes as needed

// Default route for handling invalid endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Invalid endpoint" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
