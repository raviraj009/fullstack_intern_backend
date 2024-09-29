const Transaction = require("../models/transaction.model");
const Book = require("../models/book.model");

class TransactionService {
  static async issueBook(bookName, userId, issueDate) {
    const transaction = new Transaction({ bookName, userId, issueDate });
    await transaction.save();
    return transaction;
  }
  static async returnBook(bookName, userId, returnDate) {
    const transaction = await Transaction.findOne({
      bookName,
      userId,
      returnDate: null,
    });
    if (!transaction) throw new Error("Transaction not found");

    transaction.returnDate = returnDate;
    const daysIssued = Math.ceil(
      (returnDate - transaction.issueDate) / (1000 * 60 * 60 * 24)
    );
    const book = await Book.findOne({ name: bookName });

    transaction.rent = daysIssued * book.rentPerDay;
    await transaction.save();
    return transaction;
  }
}
module.exports = TransactionService;
