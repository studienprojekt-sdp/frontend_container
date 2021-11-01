const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.static("public"));

const port = 3000;

app.listen(port, () => {
  console.log("Listening at port:" + port);
});

app.get("/api/timezone/", function(req, res) { 
  const timezone = req.query.tz;
  const requestURL = "http://time-microservice:4000/api/timezone/?tz=" + timezone;

  var config = {
    method: 'get',
    url: requestURL,
    headers: {}
  };
  
  axios(config)
  .then(function (response) {
    res.send(response.data); // we just forward the entire .json
  })
  .catch(function (error) {
    if (error.response) {
      res.status(404).send("Error occurred! Reason: " + error.response.data)
    }
    else {
      res.status(404).send("Seems like the timezone container is offline...")
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

