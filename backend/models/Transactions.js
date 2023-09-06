const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  cert_hash: {
    type: String,
    required: true,
  },
  trans_hash: {
    type: String,
    required: true,
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;