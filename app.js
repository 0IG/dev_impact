const express = require("express");
const app = (req, res) => {
  res.send("Our second backend created");
};

app.get("/name", (res, send) => {
  res.send("Isaac");
});

app.get("/add/:num1/:num2", (req, res) => {
  const num1 = parseInt(rec.params.num1);
});

app.get("/repeat-name/:name/:times", (req, res) => {
  const name = req.params.name;
  const times = parseInt(req.params.times);
  const repatedName = name.repeat(times);

  res.send(repatedName);
});

module.exports;
