//import User from "../models/user.js";

export const getAllUsers = () => async (req, res) => {
  try {
    //const users = await User.findAll();
    const users = { id: "test", name: "test" };
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};

export const getUser = () => async (req, res) => {
  try {
    //const users = await User.findAll();
    const user = { id: "test", name: "test" };
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};
