/**
 * @file This file exports a function that connects to a MongoDB database using Mongoose.
 * @requires mongoose
 */

const mongoose = require("mongoose");

/**
 * The MongoDB URI to connect to. This variable should be exported to a .env file later.
 * @type {string}
 */
const MONGODB_URI = process.env.MONGO_DB_URI;

/**
 * Checks the connection to the MongoDB database using Mongoose.
 * @function
 * @name mongoConnectionCheck
 * @returns {void}
 */
const mongoConnectionCheck = () => {
  console.log('[INFO] Checking connection to MongoDB...');
  mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
      console.log("[ERROR]  MongoDB Connection error: ", err);
      return;
    }
    console.log("[INFO] MongoDB Connection success");
  });
}

// Call the function to check the connection to the MongoDB database.
mongoConnectionCheck();
