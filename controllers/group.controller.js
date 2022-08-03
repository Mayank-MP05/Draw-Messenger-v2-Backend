const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

const Group = require("../models/group.model");
const router = express.Router();

router.get("/", (req, res) => {
  Group.find({}, (error, result) => {
    if (error) {
      console.log("ERROR: Group Fetch Failed");
      return res.status(500).json({ message: "Group Fetch failed", error });
    }
    return res.json({
      groups: result,
    });
  });
});

router.post("/all", (req, res) => {
  res.send("/");
});

module.exports = router;
