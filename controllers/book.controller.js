const BookService = require("../services/book.service");

class BookController {
  static async createBook(req, res) {
    const bookData = req.body;
    await BookService.createBook(bookData)
      .then((val) => {
        res.status(201).json(val);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }
  static async getBooksByName(req, res) {
    const { name } = req.query;
    const books = await BookService.getBooksByName(name);

    res.json(books);
  }
  static async getBooksByRentRange(req, res) {
    const { minRent, maxRent } = req.query;
    const books = await BookService.getBooksByRentRange(minRent, maxRent);
    res.json(books);
  }
  static async getBooksByFilters(req, res) {
    const { category, name, minRent, maxRent } = req.query;
    await BookService.getBooksByFilters(category, name, minRent, maxRent)
      .then((val) => {
        res.status(201).json(val);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }
  static async getAllBooks(req, res) {
    const books = await BookService.getAllBooks();
    res.json(books);
  }
}

module.exports = BookController;
