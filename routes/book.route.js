const express = require("express");
const BookController = require("../controllers/book.controller");

const router = express.Router();
router.post("/create", BookController.createBook);
router.get("/getallbook", BookController.getAllBooks);
router.get("/search", BookController.getBooksByName);
router.get("/rent-range", BookController.getBooksByRentRange);
router.get("/filters", BookController.getBooksByFilters);

module.exports = router;
