require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    return res.status(200).json("Bienvenue sur le back de Marvel !");
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.APIKEY}`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json("ERROR MESSAGE==>" + { error: error.message });
  }
});

app.get("/character/:characterId", async (req, res) => {
  try {
    console.log(req.params.characterId);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.get("/comics/:characterId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.APIKEY}`
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("server starded 🔥");
});
