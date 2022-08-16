const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

const User = require("../models/user.model");

const router = express.Router();

router.post("/auth", (req, res) => {
  const { email,
    fullname,
    emailVerified,
    createdAt,
    lastLoginAt,
    phoneNumber,
    photoURL } = req.body;
  const query = { email },
    update = {
      email,
      fullName: fullname,
      userName: email.split("@").at(0),
      emailVerified,
      createdAt,
      lastLoginAt,
      phoneNumber,
      profilePic: photoURL
    },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

  // Find and Update the document
  User.findOneAndUpdate(query, update, options, function (error, result) {
    if (error) return res.status(502).json({ error });
    return res.status(200).json({ result })
  });
});

// router.post("/getProfile", (req, res) => {
//   const { userId } = req.body;
//   User.findOne({ _id: ObjectId(userId) }, (error, result) => {
//     if (error) {
//       console.log("ERRROE");
//     }
//     res.json({
//       result,
//     });
//   });
// });

// router.post("/updateProfile", (req, res) => {
//   console.log(req.body);
//   res.send("/updateProfile");
// });

module.exports = router;
