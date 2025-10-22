// Import express
const express = require("express");

// Create express app
const app = express();
const fs = require("fs");

// Define a port
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());


app.get("/",function (req, res) {
  res.send("Hello from Express Server 🚀");
});


app.get("/about", function(req, res)  {
  res.json({ message: "This is the about route", author: "Your Name" });
});


app.post("/user", function(req, res){
  const user = req.body;
  res.json({ message: "User received successfully!", data: user });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
