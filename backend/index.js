const express = require("express");
const cors = require("cors");

// import express which runs HTTP server
// import cors so this server can be called from any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Server runs on port 3001, create a post endpoint for /authenticate
// username taken from request body and fake user object returned (not real authentication)
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
