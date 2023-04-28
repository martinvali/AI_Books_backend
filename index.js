const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const getBookpage = require("./helpers/getBookpage");
const getPicture = require("./helpers/getPicture")
const express = require("express");
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

app.post("/pic", async(req,res) => {
  const {topic} = req.body
  const pic = await getPicture(topic)

  return res.json(pic)
})


app.listen(3000, () => console.log("listening on port 3000"));
