const express = require("express");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(express.json());

app.use("/api", healthRoutes);

app.get("/", (req, res) => {
  res.send("Blogify backend running 🚀");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
