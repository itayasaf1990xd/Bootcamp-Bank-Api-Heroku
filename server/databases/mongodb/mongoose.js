require("dotenv").config({ path: "./server/.env" });
const mongoose = require("mongoose");
const { MONGODB_URL } = require("../../config");

module.exports = mongoose.connect(
  MONGODB_URL,
  () => {
    console.log("Mongo database is connected");
  },
  (error) => console.error(error)
);
