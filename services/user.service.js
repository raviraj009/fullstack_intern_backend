const User = require("../models/user.model");

class UserService {
  static async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  static async getUserById(userId) {
    return await User.findOne({ userId });
  }

  static async getAllUsers() {
    return await User.find();
  }

  static async updateUser(userId, updatedData) {
    return await User.findOneAndUpdate({ userId }, updatedData, { new: true });
  }

  static async deleteUser(userId) {
    return await User.findOneAndDelete({ userId });
  }
}

module.exports = UserService;
