const mongoose = require("mongoose");
const schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["GIF", "LINK", "TEXT", "EMOJI", "DRAW"],
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
  groupId: schema.types.ObjectId,
  userId: schema.types.ObjectId,
});
module.exports = mongoose.model("User", messageSchema);
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
