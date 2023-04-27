const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const getBookPage = require("./helpers/getBookPage");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/page", async (req, res) => {
  const { topic, page } = req.body;
  const text = await getBookPage(topic, page);

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.json(text);
});

app.listen(3000, () => console.log("listening on port 3000"));
