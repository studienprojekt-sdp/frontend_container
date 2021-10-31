const express = require("express"); // express for building the web app
const app = express();
const path = require('path');

app.use(express.static("public"));

const port = 3000;

app.listen(port, () => {
  console.log("Listening at port:" + port);
});

app.get("*", function(req, res) {
  res.sendFile("index.html");
});

