const mongoose = require("mongoose");
//FIXME: Export this variable to dot env later
const MONGODB_URI = "mongodb://localhost:27017/draw-messenger";

mongoose.connect(MONGODB_URI, (err) => {
  if (err) console.log("MongoDB Connection ERROR: ", err);
  else console.log("MongoDB Connection SUCCESS");
});
