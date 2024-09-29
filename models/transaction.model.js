const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  issueDate: { type: Date },
  returnDate: { type: Date },
  rent: { type: Number, default: 0 },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
