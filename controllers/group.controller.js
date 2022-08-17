const express = require("express");
const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;

const redis = require("redis");
const redisClient = redis.createClient({
  host: '127.0.0.1',
  port: 6379 // Default redis port
});
(async () => { await redisClient.connect(); console.log("[INIT] Redis Server Started"); })()


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

router.post("/getSingleGroup", async (req, res) => {
  const { groupId } = req.body
  
  const groupStringified = await redisClient.get(groupId);
  if (groupStringified) return res.status(200).json({ ...(JSON.parse(groupStringified)) })

  Group.find({ _id: ObjectId(groupId) }, (error, result) => {
    if (error) {
      console.log("ERROR: Single Group Fetch Failed");
      return res.status(500).json({ message: "Group Fetch failed", error });
    }
    if (result.length !== 0) {
      const group = result[0];
      redisClient.set(groupId, JSON.stringify(group), (err, reply) => {
        if (err) console.log("[REDIS] Error: ", err);
        console.log("Write to Redis Cache: ", reply);
      });
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
