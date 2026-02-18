const express = require("express");

const app = express();

// middleware to read JSON
app.use(express.json());

// home route
app.get("/", (req, res) => {
  res.send("Blogify backend running 🚀");
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
