const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

// import express which runs HTTP server
// import cors so this server can be called from any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Server runs on port 3001, create a post endpoint for /authenticate
// username taken from request body and fake user object returned (not real authentication)
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      // headers to authenticate API call with private API key
      { headers: { "private-key": "36e329a9-bd4b-4432-8978-3df42cfbdb28" } }
    );

    return res.status(response.status).json(response.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
