const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

// const redis = require("redis");
// const redisClient = redis.createClient({
//   host: '127.0.0.1',
//   port: 6379 // Default redis port
// });
// (async () => { await redisClient.connect(); })()


const Group = require("../models/group.model");
const Message = require("../models/message.model");
const router = express.Router();

router.get("/", (req, res) => {
  Group.find({}, (error, result) => {
    if (error) {
      console.log("ERROR: Group Fetch Failed");
      return res.status(500).json({ message: "Group Fetch failed", error });
    }
    if (result.length !== 0) {
      return res.status(200).json({ groups: result });
    }
    return res.status(200).json({ groups: [] });

  });
});

router.post("/getSingleGroup", (req, res) => {
  const { groupId } = req.body
  Group.find({ _id: ObjectId(groupId) }, (error, result) => {
    if (error) {
      console.log("ERROR: Single Group Fetch Failed");
      return res.status(500).json({ message: "Group Fetch failed", error });
    }
    if (result.length !== 0) {
      const group = result[0];
      return res.status(200).json(group);
    }
    return res.status(400).json({ message: "No record found!" });
  });
});

router.post("/getMessages", (req, res) => {
  const { groupId } = req.body
  Message.find({ groupId: groupId }, (error, result) => {
    if (error) {
      console.log("ERROR: Single Group Message fetch Failed");
      return res.status(500).json({ message: "Message Fetch failed", error });
    }

    return res.status(200).json(result);
  });
});

router.post("/all", (req, res) => {
  res.send("/");
});

module.exports = router;
