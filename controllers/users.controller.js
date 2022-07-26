const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

const User = require("../models/user.model");

const router = express.Router();

router.post("/", (req, res) => {
  res.send("/");
});

router.post("/getProfile", (req, res) => {
  const { userId } = req.body;
  User.findOne({ _id: ObjectId(userId) }, (error, result) => {
    if (error) {
      console.log("ERRROE");
    }
    res.json({
      result,
    });
  });
});

router.post("/updateProfile", (req, res) => {
  console.log(req.body);
  res.send("/updateProfile");
});

module.exports = router;
