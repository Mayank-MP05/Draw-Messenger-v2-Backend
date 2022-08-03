const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;
const connection = require("./db/db-connect");
const user = require("./models/user.model");
const group = require("./models/group.model");
app.use(bodyParser.json({}));

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
