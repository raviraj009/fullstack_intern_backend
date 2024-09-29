const UserService = require("../services/user.service");

class UserController {
  static async createUser(req, res) {
    const userData = req.body;
    await UserService.createUser(userData)
      .then((val) => {
        res.status(201).json(val);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }

  static async getUser(req, res) {
    try {
      const user = await UserService.getUserById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    try {
      const updatedUser = await UserService.updateUser(
        req.params.userId,
        req.body
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const deletedUser = await UserService.deleteUser(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = UserController;
