const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  userName: String,
  dateOfBirth: Date,
  profilePicture: Number,
});
module.exports = mongoose.model("User", userSchema);
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
