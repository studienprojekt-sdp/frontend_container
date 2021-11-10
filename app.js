import express from "express";
import axios from "axios";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log("Frontend container is running and listening at port: " + port);
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
    res.status(200).send(response.data);
  })
  .catch(function (error) {
    if (error.response) {
      res.status(504).send("Error occurred! Reason: " + error.response.data)
    }
    else {
      res.status(504).send("The time container cannot be reached. Check if it is online.")
    }
  });
});

app.get("/api/weather/", function(req, res) { 
  const city = req.query.c;
  const requestURL = "http://weather-microservice:4001/api/weather/?c=" + city;

  var config = {
    method: 'get',
    url: requestURL,
    headers: {}
  };
  
  axios(config)
  .then(function (response) {
    res.status(200).send(response.data);
  })
  .catch(function (error) {
    if (error.response) {
      res.status(504).send("Error occurred! Reason: " + error.response.data)
    }
    else {
      res.status(504).send("The weather container cannot be reached. Check if it is online.")
    }
  });
});

app.get("*", function(req, res) {
  res.status(200).sendFile("public/index.html", { root: path.resolve(path.dirname('')) });
});

