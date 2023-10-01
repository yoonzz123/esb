import User from "../models/user.js";
import logger from "../loaders/logger.js";

export default {
  getAllUsers: async (req, res, next) => {
    logger.info("UserController getAllUsers start");
    try {
      const users = await User.getAllUser();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users" });
    }
    logger.info("UserController getAllUsers end");
    return res;
  }, //getAllUsers end

  test: () => {
    console.log("asdfklaksldjfklajsdlfjla");
    console.log("asdfklaksldjfklajsdlfjla");
  },
};
