import express from "express";
import { getAllUsers, getUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send(getAllUsers);
});
userRouter.get("/user/:id", getUser);

export default userRouter;
