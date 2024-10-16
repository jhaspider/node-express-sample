// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 9000;

// Enable CORS for all requests
app.use(cors());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello from EC2!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
