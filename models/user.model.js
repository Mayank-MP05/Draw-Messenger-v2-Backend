const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: [validator.isEmail, "Enter a valid email address."],
  },
  fullName: {
    type: String,
  },
  userName: {
    type: String,
    lowercase: true,
    validate: [
      validator.isAlphanumeric,
      "Usernames may only have letters and numbers.",
    ],
  },
  dateOfBirth: Date,
  emailVerified: Boolean,
  isAnonymous: {
    type: Boolean,
    default: false
  },
  aboutMe: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt`,
  },
  createdAt: Date,
  lastLoginAt: Date,
  profilePic: {
    type: String,
    default: "https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png"
  }
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
