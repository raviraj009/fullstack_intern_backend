var express = require("express");
var router = express.Router();
const userRouter = require("./user.route");
const bookRouter = require("./book.route");
const transactionRouter = require("./transaction.route");
/* GET home page. */
router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/transaction", transactionRouter);

module.exports = router;
