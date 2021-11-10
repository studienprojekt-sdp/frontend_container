# Frontend Container

This container is meant as the frontend for the network of microservices. This is the only container that exposes its port to the outside and thus can be accessed from the web.
At the moment it is started together with the time- and weather-web-api-microservices via a docker-compose.yml. All three containers are connected to the same network.

The time- and weather-web-api-microservices can only be reached from within the network and should not expose their ports to the outside.

## Currently build with the help of:

Bootstrap
nodeJS
express.js
axios.js
FontAwesome
