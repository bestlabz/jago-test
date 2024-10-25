const express = require("express");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.send({ message: "Welcome to jago-merchback Server! at Staging" });
  } catch (error) {
    console.error("Failed to retrieve deployment data:", error);
    res.status(500).send({ error: error.message });
  }
});
