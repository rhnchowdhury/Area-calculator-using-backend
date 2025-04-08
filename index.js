const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //   res.send("Server created");

  //! html file send into home page
  res.sendFile(__dirname + "/Home.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/Circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/Triangle.html");
});

// ! value calculation
app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h3>The area of Circle is ${area}</h3>`);
});

app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h3>The area of Triangle is ${area}</h3>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
