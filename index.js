const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const getBookpage = require("/helpers/getBookpage");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/page", async (req, res) => {
  const { topic, page } = req.body;
  const text = await getBookpage(topic, page);

  return res.json(text);
});

app.listen(3000, () => console.log("listening on port 3000"));
