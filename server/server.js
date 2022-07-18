const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
var cors = require('cors')
const queryString = require("query-string");

const db = require("./db");

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
// on restart reset DB
var fs = require("fs");
var filePath = "./database/report.sqlite";
try{
fs.unlinkSync(filePath);
} catch(e) {
  
}

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/ggo", async (req, res) => {
  const ggoAll = await db.ggo.all();
  return res.send(ggoAll);
});

app.get("/ggo/where", async (req, res) => {
  let isCondition = false;
  Object.keys(req.query).forEach((param) => {
    isCondition = true;
    req.query[param] = req.query[param] === "true" ? true : false;
  });
  if (isCondition) {
    const ggoWhere = await db.ggo.where(req.query);
    return res.send(ggoWhere);
  } else {
    return res.status(400).send("error");
  }
});

app.get("/consolidation", async (req, res) => {
  const consolidationAll = await db.consolidation.all();
  return res.send(consolidationAll);
});

app.get("/consolidation/where", async (req, res) => {
  let isCondition = false;
  Object.keys(req.query).forEach((param) => {
    isCondition = true;
    req.query[param] = req.query[param] === "true" ? true : false;
  });
  if (isCondition) {
    const consolidationWhere = await db.consolidation.where(req.query);
    return res.send(consolidationWhere);
  } else {
    return res.status(400).send("error");
  }
});

app.get("/fibrosis", async (req, res) => {
  const consolidationAll = await db.consolidation.all();
  return res.send(consolidationAll);
});


app.get("/fibrosis/where", async (req, res) => {
  let isCondition = false;
  Object.keys(req.query).forEach((param) => {
    isCondition = true;
    req.query[param] = req.query[param] === "true" ? true : false;
  });
  if (isCondition) {
    const consolidationWhere = await db.consolidation.where(req.query);
    return res.send(consolidationWhere);
  } else {
    return res.status(400).send("error");
  }
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.on("ready", function () {
  app.listen(process.env.PORT || 8080, function () {
    console.log("server started at 8080");
    console.log("app is ready");
  });
});

// setup DB
(async () => {
  await db.init();
  app.emit("ready");
})();
