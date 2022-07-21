const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const IO = socketio(server);

IO.on("conncetion", (socket) => {
  console.log("We have a new conncetion !");
  socket.on("disconnect", () => {
    console.log("User had left !");
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
