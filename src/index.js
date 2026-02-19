const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blogify backend running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is healthy 💪",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
