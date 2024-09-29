const Book = require("../models/book.model");

class BookService {
  static async createBook(bookData) {
    const book = new Book(bookData);
    return await book.save();
  }

  static async getBooksByName(name) {
    return await Book.find({ name: { $regex: name, $options: "i" } });
  }
  static async getBooksByRentRange(minRent, maxRent) {
    return await Book.find({ rentPerDay: { $gte: minRent, $lte: maxRent } });
  }
  static async getBooksByFilters(category, name, minRent, maxRent) {
    const query = {};

    // Add category filter if provided
    if (category) {
      query.category = category;
    }

    // Add name filter if provided
    if (name) {
      query.name = { $regex: name, $options: "i" }; // Case-insensitive regex search
    }

    // Add rent range filters if provided
    if (minRent !== undefined || maxRent !== undefined) {
      query.rentPerDay = {};
      if (minRent !== undefined) {
        query.rentPerDay.$gte = minRent;
      }
      if (maxRent !== undefined) {
        query.rentPerDay.$lte = maxRent;
      }
    }

    return await Book.find(query);
  }
  static async getAllBooks() {
    return await Book.find({});
  }
}

module.exports = BookService;
