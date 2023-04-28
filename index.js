const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const getBookPage = require("./helpers/getBookPage");
const app = express();
const cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
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

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  return res.json(text);
});

app.listen(3000, () => console.log("listening on port 3000"));
