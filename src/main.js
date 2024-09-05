const express = require("express");
const path = require("path");
const { getTimetable } = require("./timetable");

// Config
const port = process.env.PORT || 3000;

// Static file server
const app = express();
app.use(express.static(path.join(__dirname, "public")));

// Timetable API
app.get("/api/timetable", async (req, res) => {
  const { id, password } = req.query;
  if (!id || !password) {
    res.status(400).send("id and password are required");
    return;
  }

  try {
    const timetable = await getTimetable(id, password);
    res.json(timetable);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Start server

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
