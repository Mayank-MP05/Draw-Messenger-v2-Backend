const mongoose = require("mongoose");

// - Name
// - Description
// - profilePic
// - usersPresent
const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  profilePic: String,
  tags: Array,
  createdAt: Date,
  createdBy: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model("Group", groupSchema);
// group.create(
//   {
//     name: "rohit group",
//     description: "this is test grop",
//     createdAt: new Date(),
//     profilePicture: 7,
//     createdBy: '62e01d89b39acc922137766c'
//   },
//   (err, res) => {
//     if (err) console.log("err: ", err);
//     if (res) console.log("res: ", res);
//   }
// );
