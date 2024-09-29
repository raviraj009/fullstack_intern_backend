const express = require("express");
const TransactionController = require("../controllers/transaction.controller");

const router = express.Router();

router.post("/issue", TransactionController.issueBook);
router.post("/return", TransactionController.returnBook);

module.exports = router;
