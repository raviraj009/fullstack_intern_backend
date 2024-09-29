const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/fullstact_Backend_intrn");
};

module.exports = connectDB;
