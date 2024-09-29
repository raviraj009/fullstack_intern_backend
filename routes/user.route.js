var express = require("express");
const UserController = require("../controllers/user.controller");

var router = express.Router();

/* GET users listing. */
router.post("/create", UserController.createUser);
router.get("/alluser", UserController.getAllUsers);
router.get("/:userId", UserController.getUser);
router.put("/:userId", UserController.updateUser);
router.delete("/:userId", UserController.deleteUser);

module.exports = router;
