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

app.use(express.json());

app.post("/page", async (req, res) => {
  let curText = "";
  const { topic, page } = req.body;
  console.log(req.body);

  if (req.body.curText) {
    curText = req.body.curText;
  }
  const text = await getBookPage(topic, page, curText);

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  return res.json(text);
});

app.listen(3000, () => console.log("listening on port 3000"));
