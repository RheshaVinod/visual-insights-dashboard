const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/data", (req, res) => {
  const raw = fs.readFileSync("data.json");
  res.json(JSON.parse(raw));
});

app.listen(5000, () => console.log("Server running on port 5000"));
