const express = require("express");
const cors = require("cors");
require("dotenv").config();

const healthRoutes = require("./routes/healthRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/review", reviewRoutes);

app.get("/", (req, res) => {
  res.send("🚀 AI Code Review Assistant Backend is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});