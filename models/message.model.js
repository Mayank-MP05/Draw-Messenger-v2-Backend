const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;
const messageSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["GIF", "LINK", "TEXT", "EMOJI", "DRAW"],
  },
  content: {
    type: String,
  },
  gifContent: {
    url: String,
  },
  linkContent: {
    title: String,
    description: String,
    url: String,
    imgUrl: String,
  },
  textContent: {
    content: String,
  },
  emojiContent: {
    content: String,
  },
  drawingContent: {
    content: String,
  },
  fileContent: String,
  textContent: String,
  createdAt: Date,
  groupId: ObjectId,
  userId: ObjectId,
});
module.exports = mongoose.model("Message", messageSchema);
// user.create(
//   {
//     email: "test@test.com",
//     fullName: "rohit dale",
//     userName: "rohitdale",
//     dateOfBirth: new Date(),
//     profilePicture: 7,
//   },
//   (err, res) => {
//     if (err) console.log("err: ", err);
//     if (res) console.log("res: ", res);
//   }
// );
