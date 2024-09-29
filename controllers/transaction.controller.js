const TransactionService = require("../services/transaction.service");

class TransactionController {
  static async issueBook(req, res) {
    const { bookName, userId, issueDate } = req.body;
    const transaction = await TransactionService.issueBook(
      bookName,
      userId,
      issueDate
    );
    res.json(transaction);
  }
  static async returnBook(req, res) {
    const { bookName, userId, returnDate } = req.body;
    const transaction = await TransactionService.returnBook(
      bookName,
      userId,
      returnDate
    );
    res.json(transaction);
  }
}
module.exports = TransactionController;
