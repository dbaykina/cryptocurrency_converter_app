const PORT = 9000;

const axios = require("axios").default;
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

const URL = process.env.URL;
const API_KEY = process.env.API_KEY;

app.get("/", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await axios(`${URL}${API_KEY}`, options);
  
    res.status(200).json(response.data.rates);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.get("/converter", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const response = await axios(`${URL}${API_KEY}`, options);
    
    res.status(200).json(response.data.rates);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});


app.listen(PORT, () => console.log(`server is running on ${PORT} `));
