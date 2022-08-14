const express = require("express");
const app = express();

// CORS Error fixes
const cors = require("cors");
app.use(cors());

const { Server } = require("socket.io");
const http = require('http');
const server = app.listen(9001);
const io = new Server(server, { cors: { origin: '*' } });

const port = 9000;
const connection = require("./db/db-connect");
const user = require("./models/user.model");
const group = require("./models/group.model");

// Bodyparser Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json({}));

const { saveMessageToDB } = require("./controllers/message.controller")
io.on('connection', (socket) => {
  console.log('[INIT] Socket.io Connected!');
  socket.on('chat', (payload, callback) => {
    console.log(payload);
    saveMessageToDB(payload)
    io.emit('chat', payload);
  })
});

// IMPORTS: Controllers Import
const UserController = require("./controllers/users.controller");
const GroupController = require("./controllers/group.controller");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", UserController);
app.use("/group", GroupController);

app.listen(port, () => {
  console.log(`[INIT] Draw Server started on Port: ${port}`);
});
